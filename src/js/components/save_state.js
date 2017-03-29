export default function saveState(s) {
    localStorage.setItem('obodrovToDos', JSON.stringify(s));
}