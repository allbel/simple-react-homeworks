import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        if (show === false) setShow(true)
    }
    const onMouseLeave = () => {
        if (show === true) setShow(false)
    }

    const wrapInZero = (d: number) => d < 10 ? '0' + d : d

    const stringTime = `${wrapInZero(date.getHours())}:${wrapInZero(date.getMinutes())}:${wrapInZero(date.getSeconds())}` // fix with date

    const stringDate = `${wrapInZero(date.getDate())}.${wrapInZero(date.getMonth() + 1)}.${date.getFullYear()}` // fix with date

    return (
        <div className={s.box}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            <div className={s.boxDate}>
                {show && stringDate}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
