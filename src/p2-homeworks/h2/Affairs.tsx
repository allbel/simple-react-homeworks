import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import css from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filter: FilterType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all') // need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    return (
        <div className={css.someClass}>

            {mappedAffairs}

            <button className={props.filter === 'all' ? css.select : ''} onClick={setAll}>All</button>
            <button className={props.filter === 'high' ? css.select : ''} onClick={setHigh}>High</button>
            <button className={props.filter === 'middle' ? css.select : ''} onClick={setMiddle}>Middle</button>
            <button className={props.filter === 'low' ? css.select : ''} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
