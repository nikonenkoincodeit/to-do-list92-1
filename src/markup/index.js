

function createMarkup(arr = []) {
    return arr.map(({id, value, checked}) => `<li class="item ${checked ? 'checked' : ''} " data-id="${id}">
<p class="text">${value}</p>
<button type="button" class="button">x</button>
</li>`).join('')
}

export { createMarkup }