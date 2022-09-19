export type ThemeType = 'dark' | 'red' | 'some' | 'gold'

type StateThemeType = {
    currentTheme: ThemeType
}

const initState: StateThemeType = {
    currentTheme: 'some'
};

const CHANGE_THEME = 'CHANGE_THEME'

export const themeReducer = (state = initState, action: ActionType): StateThemeType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, currentTheme: action.theme};
        }
        default: return state;
    }
};

type ActionType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: ThemeType) =>
    ({type: CHANGE_THEME, theme} as const); // fix any