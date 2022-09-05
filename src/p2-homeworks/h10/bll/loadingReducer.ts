type LoadingStateType = {
    isLoading: boolean
}

const initState: LoadingStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-STATUS-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type ActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE-STATUS-LOADING', isLoading
} as const) // fix any