import react, { useState } from 'react';
import FlashcardList from '../Tests/FlashcardList';
import './Test.css'

function Test(){
    const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
    return (
        <FlashcardList flashcards={flashcards}/>
    );
}

const SAMPLE_FLASHCARDS = [
    {
        id: 1,
        question: 'What is uncle?',
        answer: 'דוד',
        options: [
            'דוד',
            'דודה',
            'סבא',
            'אחיין'
        ]
    },

    {
        id: 2,
        question: 'What is niece?',
        answer: 'אחיינית',
        options: [
            'אחיינית',
            'דודה',
            'סבא',
            'אחיין'
        ]
    },

    {
        id: 3,
        question: 'What is grandmother?????',
        answer: 'סבתא',
        options: [
            '!!!סבתא',
            'דודה',
            'סבא',
            'אחיין'
        ]
    }
]
export default Test;