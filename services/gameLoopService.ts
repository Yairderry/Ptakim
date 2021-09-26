import { v4 as uuidv4 } from 'uuid';

function getWords(wordCount: number = 10) {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].map((word, index) => {
        return {
            id: uuidv4(),
            text: word,
            status: false
        }
    })
}

export const gameLoopService = {
    getWords
}