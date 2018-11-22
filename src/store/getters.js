export const name = (state) => {
    return state.count;
}

export const age = (state) => {
    return state.count
}

export const other = (state) => {
    return `My name is ${state.count}, I am ${state.count}.`;
}