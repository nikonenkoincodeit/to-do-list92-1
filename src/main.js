import { formEl } from "./refs";
import { saveStorage } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const value = event.target.elements.message.value.trim();
  console.log(value);
  event.target.reset();
  saveStorage(createDataObj(value));
}

function createDataObj(value) {
  return { value, id: Date.now(), checket: false };  
}
