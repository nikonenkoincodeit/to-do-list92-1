const STORAGE_KEY = "tu-do-list";

function setToLocal(data) {
  const arr = getStatus();
  arr.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}
function getStatus() {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch (err) {
    console.log(err.message);
  }
}

export { setToLocal, getStatus };
