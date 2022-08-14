import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name.localeCompare(b.name))
            }
            return [...state].sort((a, b) => b.name.localeCompare(a.name))
        }
        case 'check': {
            // need to fix
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}

type ActionType = ReturnType<typeof sortUpAC> | ReturnType<typeof sortDownAC> | ReturnType<typeof checkAge18AC>

export const sortUpAC = () => ({type: 'sort', payload: 'up'} as const)
export const sortDownAC = () => ({type: 'sort', payload: 'down'} as const)
export const checkAge18AC = () => ({type: 'check', payload: 18} as const)
