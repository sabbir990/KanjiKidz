import React from 'react'
import { AiOutlineSound } from "react-icons/ai";

export default function Vocabulary_card({ vocabulary }) {
    function pronounceWord(word) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    }
    return (
        <div className='px-6 py-4 shadow rounded-md'>
            <h3 className='font-semibold text-3xl text-center'>{vocabulary?.word}</h3>
            <p className='font-semibold text-xl text-center'>Pronunciation : {vocabulary?.pronunciation}</p>
            <p className='text-center'>When to say : {vocabulary?.whenToSay}</p>
            <div className='flex items-center justify-center mt-2'>
                <button className='btn btn-ghost' onClick={() => pronounceWord(vocabulary?.word)}><AiOutlineSound /></button>
            </div>
        </div>
    )
}
