import { formEl } from "./refs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  const value = e.target.elements.message.value.trim();
  if (!value) {
    return;
  }
  console.log(value);
  e.currentTarget.reset();
}
