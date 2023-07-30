const STORAGE_KEY = "to-do-list";
export function toLocalStorage(value) {
  const arrayFoToDoList = getLocalData();
  arrayFoToDoList.push(value);
  savedData(arrayFoToDoList);
}
export function getLocalData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err.message);
  }
}

export function savedData(params) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(params));
}
