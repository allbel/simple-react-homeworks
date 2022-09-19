export type ThemesType = 'dark' | 'red' | 'some' | 'gold'

type StateThemesType = {
    currentTheme: ThemesType
}

const initState: StateThemesType = {
    currentTheme: 'some'
};

const CHANGE_THEME = 'CHANGE_THEME'

export const themeReducer = (state = initState, action: ActionType): StateThemesType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, currentTheme: action.theme};
        }
        default: return state;
    }
};

type ActionType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: ThemesType) =>
    ({type: CHANGE_THEME, theme} as const); // fix any