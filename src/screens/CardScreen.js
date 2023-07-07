import React, { useEffect, useState } from 'react'
import { words } from '../data/vocabularydotcom-top-1000'
import Card from '../components/Card'
import s from '../components/style.module.scss'
const CardScreen = () => {
    const [randomWordInfo, setRandomWordInfo] = useState(null)

    useEffect(() => {
        generateRandomWord();
    }, [])

    const generateRandomWord = () => {
        setRandomWordInfo(words[Math.floor(Math.random() * words.length)]);
    }



    return (
        <div>
            <Card wordInfo={randomWordInfo} />
            <button className={s.button} onClick={generateRandomWord}>Random Word</button>
        </div>
    )
}

export default CardScreen