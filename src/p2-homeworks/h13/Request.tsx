import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "./requests-api";
import s from './HW13.module.css';

function Request() {
    const [checked, setChecked] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const [report, setReport] = useState<string>('')

    const request = () => {
        requestsAPI.create(checked)
            .then((data) => {
                setReport(data.info)
            })
            .catch((error) => {
               if (error.response) {
                   setReport(error.response.data.errorText)
               } else {
                   setReport(error.message)
               }
            })
    }

    return (
        <div className={s.box}>
            <SuperButton onClick={request}>
                Request
            </SuperButton>

            <SuperCheckbox checked={checked} onChange={onChange}/>

            <span className={s.report}>{report}</span>
        </div>
    );
};

export default Request;