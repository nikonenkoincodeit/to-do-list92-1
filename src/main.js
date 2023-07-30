import { uid } from "uid";
import { formEl, olEl } from "./refs";
import { createMarkup } from "./markup";
import { toLocalStorage, getLocalData, savedData } from "./api";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import { Button } from "bootstrap";
formEl.addEventListener("submit", formSubmit);
olEl.addEventListener("click", deleteBtn);

function formSubmit(e) {
  e.preventDefault();
  const value = e.target.elements.message.value.trim();
  if (!value) {
    return;
  }
  const objData = createObjData(value);
  toLocalStorage(objData);
  const markup = createMarkup([objData]);
  addMarkup(markup);
  console.log(markup);
  e.currentTarget.reset();
}

function createObjData(value) {
  return { value, id: uid(5), checked: false };
}

function addMarkup(markup) {
  olEl.insertAdjacentHTML("beforeend", markup);
}

window.addEventListener("load", init);
function init() {
  const dataStorege = getLocalData();
  if (!dataStorege.length) {
    return;
  }
  const markup = createMarkup(dataStorege);
  addMarkup(markup);
}

function deleteBtn(e) {
  const eTarg = e.target;
  if (eTarg.nodeName !== "BUTTON") {
    return;
  }
  const parentLi = eTarg.closest(".item");
  const parentId = parentLi.dataset.id;
  const objId = getLocalData().filter(({ id }) => id !== parentId);
  savedData(objId);
  parentLi.remove();
}
