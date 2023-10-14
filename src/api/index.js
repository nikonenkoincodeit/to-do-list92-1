const STORAGE_KEY = "to-do-list";

export function saveStorage(data) {
    const items = getDataFromStorage();
    items.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function getDataFromStorage() {
    try {
           const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
    } catch (error) {
        console.log(error.message);
    } 
}