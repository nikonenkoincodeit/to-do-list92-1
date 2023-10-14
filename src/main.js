import { formEl, listEl } from "./refs";
import { saveStorage, getDataFromStorage } from "./api";
import { createMarkup } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.message.value.trim();
  console.log(value);
  event.target.reset();
  const dataObj = createDataObj(value);
  saveStorage(dataObj);
  const markup = createMarkup([dataObj]);
  addMarkup(markup);
}

function createDataObj(value) {
  return { value, id: Date.now(), checket: false };
}

function onLoat() {
  const items = getDataFromStorage();
  if (!items.length) {
    return;
  }

  const markup = createMarkup(items);
  console.log(markup);
  addMarkup(markup);
}
onLoat();

function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}
