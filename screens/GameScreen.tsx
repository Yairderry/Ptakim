import React, { useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Note } from '../components/Note'
import { GameLevels } from '../enums/levels'
import { IWord } from '../interfaces/IWord'
import { gameLoopActions } from '../store/actions/gameLoopActions'
import { teamsActions } from '../store/actions/teamsActions'
import { RootTabScreenProps } from '../types'
import { PauseGameScreen } from './PauseGameScreen'

interface IProps {
    navigation: RootTabScreenProps<'Game'>;
    // time: number;
    // name: string;
    // score: number;
    // word: string;

}
export const GameScreen: React.FC<IProps> = ({ navigation }) => {
    const gRoundTime = useSelector((state: any) => state.gameLoopReducer.roundTime)
    const gGameStatus = useSelector((state: any) => state.gameLoopReducer.isGameOn)
    const gCurrentLevel = useSelector((state: any) => state.gameLoopReducer.currentLevel)
    const gWords = useSelector((state: any) => state.gameLoopReducer.words.filter((word: IWord) => !word.status));

    // const gWin = useSelector((state: any) => state.gameLoopReducer.isWin);

    const gTeams = useSelector((state: any) => state.teamsReducer.teams);

    const [finished, setFinished] = useState(false);

    const [remainingTime, setRemainingTime] = useState<number>(gRoundTime);
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [teamIndex, setTeamIndex] = useState<number>(0);

    const dispatch = useDispatch()

    useEffect(() => {
        // initial game
        dispatch(gameLoopActions.initGameLoop())
    }, [])

    useEffect(() => {
        // handle time changes
        setTimeout(() => {
            remainingTime && gGameStatus &&
                setRemainingTime((remainingTime) => remainingTime - 1)
        }, 1000)
        remainingTime === 0 && handleRoundEnded()
    }, [remainingTime, gGameStatus])

    useEffect(() => {
        // handle level finished
        if (gWords.length === 0) {
            // if (gCurrentLevel === GameLevels.THIRD_ROUND) {
            //     setFinished(true)
            //     handleRoundEnded()
            // } else {
            handleLevelUp()
            // }
        }

    }, [gWords])

    const handleButtonClicked = (succeed: boolean) => {
        // handle petek answer
        succeed ? handleSucceed() : handlePass()
        updateScore(succeed);
    }
    const handleRoundEnded = () => {
        updateGameStatus(false);
        setRemainingTime(gRoundTime)
        setTeamIndex(gTeams.length - 1 > teamIndex ? teamIndex + 1 : 0)
    }
    const handleSucceed = () => {
        console.log('succeed');
        updateWord(gWords[wordIndex].id)
        gWords.length - 1 <= wordIndex && setWordIndex(0);
    }
    const handlePass = () => {
        console.log('pass');
        setWordIndex(gWords.length - 1 > wordIndex ? wordIndex + 1 : 0)
    }
    const updateWord = (wordId: string): void => {
        dispatch(gameLoopActions.updateWordStatus(wordId))
    }
    const updateGameStatus = (status: boolean) => {
        console.log('pause', status);
        dispatch(gameLoopActions.toggleGameStatus(status))
    }
    const handleLevelUp = () => {
        console.log('levelup');
        handleRoundEnded();
        dispatch(gameLoopActions.moveLevelUp())
    }
    const updateScore = (succeed: boolean) => {
        console.log('update score');
        dispatch(teamsActions.updateTeamScore(gTeams[teamIndex].id, succeed))
    }
    const startNewGame = () => {
        console.log('new game');
    }
    return (
        <View style={styles.pageContainer}>
            <View style={styles.navContainer}>
                <Text style={styles.navText}>{gTeams[teamIndex].teamName}</Text>
                <Text style={styles.navText}>{gCurrentLevel}</Text>
                <Text style={styles.navText}>{remainingTime}</Text>
                <Text style={styles.navText}>{gTeams[teamIndex].score}</Text>
            </View>
            {
                gWords.length > 0 &&
                <View style={styles.noteContainer}>
                    <Note word={gWords[wordIndex].text}></Note>
                </View>

            }
            <Button title={gGameStatus ? 'pause' : 'continue'} onPress={() => updateGameStatus(!gGameStatus)}></Button>
            {
                gWords.length > 0 && gGameStatus &&
                <View style={styles.buttonsContainer}>
                    <Button title={'no'} onPress={() => handleButtonClicked(false)}></Button>
                    <Button title={'yes'} onPress={() => handleButtonClicked(true)}></Button>
                </View>
            }
            <Modal
                animationType="fade"
                transparent={true}
                visible={!gGameStatus}
            >
                <PauseGameScreen onResetGame={finished ? () => startNewGame() : null} onCountinue={() => updateGameStatus(true)} teams={gTeams}></PauseGameScreen>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 8
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
    navText: {
        color: '#fff',
        width: 'auto',
        fontSize: 20,
        fontWeight: 'bold'
    },
    noteContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
})
