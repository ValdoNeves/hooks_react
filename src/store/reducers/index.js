function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
            break
        case 'login':
            return { ...state, user: { name: action.payload } }
            break
        case 'muiltSeven':
            return { ...state, number: state.number * 7 }
            break
        case 'divForTwentyFive':
            return { ...state, number: state.number / 25 }
            break
        case 'parseForInteger':
            return { ...state, number: parseInt(state.number) }
            break
        case 'addAnyNumber':
            return { ...state, number: state.number + action.payload}
            break
        case 'zerar':
            return { ...state, number: 0 }
        default:
            return state
            break
    }
}

export {
    reducer
    
}