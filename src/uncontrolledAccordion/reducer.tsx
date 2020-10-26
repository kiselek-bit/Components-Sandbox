export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export type ReducerStateType = {
    collapsed: boolean
}
export type ReducerActionType = {
    type: 'TOGGLE-COLLAPSED'
}
export const reducer = (state: ReducerStateType, action: ReducerActionType): ReducerStateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('bad action')
    }
}