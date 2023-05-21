
type StateType = {
    themeId: number
}
type ChangeThemeIdAT = {
    type: 'SET_THEME_ID'
    id: number
}

const initState = {
    themeId: 1,
}



export const themeReducer = (state: StateType = initState, action: ChangeThemeIdAT): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            debugger
            return {...state,themeId: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any
