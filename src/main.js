import { uid } from "uid";
import { formEl } from "./refs";
import { setToLocal } from "./api";
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
  const data = factory(inputValue)
  console.log(createMarkup([data]))
  setToLocal(data);
  event.target.reset();
}

function factory(value){
  return {
    value,
    id: uid(),
    checked: false,
  }
}
