import { uid } from "uid";
import { formEl, listEl } from "./refs";
import { setToLocal, getStatus, saveNewData } from "./api";
import { createMarkup } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const inputValue = event.target.elements.message.value.trim();
  if (!inputValue) {
    return;
  }
  const data = factory(inputValue);

  const markup = createMarkup([data]);
  addMarkup(markup);

  setToLocal(data);

  event.target.reset();
}

function factory(value) {
  return {
    value,
    id: uid(),
    checked: false,
  };
}

function init() {
  const array = getStatus();
  if (!array.length) return;

  const markup = createMarkup(array);
  addMarkup(markup);
}

function addMarkup(markup) {
  listEl.insertAdjacentHTML("beforeend", markup);
}

window.addEventListener("load", init);

listEl.addEventListener("click", onDeleteBtnClick);
function onDeleteBtnClick(evt) {
  if (!evt.target.classList.contains("button")) return;

  const parentEl = evt.target.closest(".item");
  const idToFind = parentEl.dataset.id;

  parentEl.remove();

  const filteredArr = getStatus().filter(({ id }) => id !== idToFind);

  saveNewData(filteredArr);
}
