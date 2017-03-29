const defaultState = {tasks: [],activeFilter: "all"};
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('obodrovToDos');
        if (serializedState === 'undefined') {
            return defaultState;
        }
            return JSON.parse(serializedState);
    } catch (err) {
            return defaultState;
    }

};