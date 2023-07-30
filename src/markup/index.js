export function createMarkup(array = []) {
  return array
    .map((el) => {
      return `<li class="item ${el.checked ? "checked" : ""} " data-id="${
        el.id
      }">
    <p class="text">${el.value}</p>
    <button type="button" class="button">x</button>
  </li> `;
    })
    .join("");
}
