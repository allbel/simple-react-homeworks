import React, {ChangeEvent, useState} from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
    min?: number
    max?: number
    step?: number
    marks?: boolean
    disable?: boolean

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step,
        marks, disable
    }
) => {

    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    return (
        <>
            <Box sx={{display: 'inline-block', width: 130 }}>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    disableSwap
                    min={min}
                    max={max}
                    step={step}
                    marks={marks}
                    disabled={disable}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
