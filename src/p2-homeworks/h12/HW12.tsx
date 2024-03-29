import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

const themes: ThemeType[] = ['dark', 'red', 'some', 'gold'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>((state) => state.theme.currentTheme)

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                name={'themes'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
