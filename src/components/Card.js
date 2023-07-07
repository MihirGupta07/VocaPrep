import React, { useEffect, useState } from 'react'
import s from "./style.module.scss"
import { Typography } from '@mui/material'
const Card = ({ wordInfo }) => {
    const [flipped, setFlipped] = useState(false)
    useEffect(() => {
        setFlipped(true)
    }, [wordInfo])

    return (
        <div onClick={() => setFlipped(flip => !flip)}>
            <div className={flipped ? s.flipped : ""}>
                <div className={`${s.front} ${s.card}`}>
                    <Typography variant="h2">{wordInfo?.word}</Typography>
                </div>
                <div className={`${s.back} ${s.card}`}>
                    <Typography variant="h3" mb={6}>{wordInfo?.word}</Typography>
                    <Typography variant="subtitle1">{wordInfo?.definition}</Typography>

                </div>
            </div>
        </div>
    )
}

export default Card