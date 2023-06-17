// UTILITY
const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};

// STATIC HTML ELEMENTS RENDERED DYNAMICALLY
const form = ` <form>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" placeholder="Todo Item" required>
      <label for="name">Todo Item</label>
    </div>

    <button type="submit" class="btn btn-success">Add Todo</button>
  </form>`;

const filterButtons = `
  <hr />
    <button class="btn btn-danger btn-sm" id="filter-incomplete">INCOMPLETE</button>
    <button class="btn btn-success btn-sm" id="filter-complete">COMPLETE</button>
  `;

const todoCard = `<div class="card m-2">
        <div class="card-body">
          This is a TODO!
          <button class="btn btn-danger">DONE</button>
        </div>
      </div>
    `;

// INITIAL DOM LOAD
const buildDom = () => {
  renderToDom("#app-form", form); // ADD THE HTML FORM TO THE DOM
  renderToDom("#app-filter", filterButtons); // ADD THE FILTER BUTTONS TO THE DOM
  renderToDom("#app-todos", todoCard); // ADD THE FILTER BUTTONS TO THE DOM
};

buildDom();
