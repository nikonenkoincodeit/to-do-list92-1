import { uid } from "uid";
import { formEl } from "./refs";
import { toLocalStorage } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  const value = e.target.elements.message.value.trim();
  if (!value) {
    return;
  }
  const objData = createObjData(value);
  toLocalStorage(objData);
  e.currentTarget.reset();
}

function createObjData(value) {
  return { value, id: uid(5), checked: false };
}
