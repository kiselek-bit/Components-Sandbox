import {reducer, ReducerActionType, ReducerStateType} from "./reducer";

test('collapsed should be true', () => {
    let state: ReducerStateType = {
        collapsed: false
    }
    let action: ReducerActionType = {
        type: "TOGGLE-COLLAPSED"
    }

    const newState = reducer(state, action)

    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    let state: ReducerStateType = {
        collapsed: true
    }
    let action: ReducerActionType = {
        type: "TOGGLE-COLLAPSED"
    }

    const newState = reducer(state, action)

    expect(newState.collapsed).toBe(false)
})