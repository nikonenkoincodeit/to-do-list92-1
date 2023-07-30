const STORAGE_KEY = "to-do-list";
export function toLocalStorage(value) {
  const arrayFoToDoList = getLocalData();
  arrayFoToDoList.push(value);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrayFoToDoList));
}
function getLocalData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err.message);
  }
}
