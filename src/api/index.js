const STORAGE_KEY = "tu-do-list";

function setToLocal(data) {
  const arr = getStatus();
  arr.push(data);
  saveNewData(arr)
}
function getStatus() {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch (err) {
    console.log(err.message);
  }
}

function saveNewData(arr) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}

export { setToLocal, getStatus, saveNewData };

