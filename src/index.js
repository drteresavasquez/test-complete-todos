// DATA
const todoArray = [];

// ******** SESSION 12 START
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

const todoCard = (item) => {
  return `
      <div class="card m-2">
        <div class="card-body">
          ${item.name}
          ${
            item.complete
              ? ""
              : `<button class="btn btn-danger" id=${item.id}>DONE</button>`
          }
        </div>
      </div>
    `;
};
// ******** SESSION 12 END

// ******** SESSION 13 START
// ITERATION
const todosOnDom = (filterType) => {
  let domString = "";

  if (filterType === "complete") {
    for (let item of todoArray.filter((i) => i.complete)) {
      domString += todoCard(item);
    }
  } else {
    for (let item of todoArray.filter((i) => !i.complete)) {
      domString += todoCard(item);
    }
  }
  renderToDom("#app-todos", domString);
};
// ******** SESSION 13 END

// EVENT LISTENERS
const formEvent = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const obj = {
      id: todoArray.length + 1,
      name: document.querySelector("#name").value,
      complete: false
    };

    todoArray.push(obj);
    todosOnDom();
    form.reset();
  });
};

// EVENT BUBBLING
const todoEvents = () => {
  const todoDiv = document.querySelector("#app-todos");

  todoDiv.addEventListener("click", (e) => {
    if (e.target.id) {
      todoArray[e.target.id - 1].complete = true;
    }
    todosOnDom();
  });
};

// EVENT BUBBLING
const filterEvents = () => {
  document.querySelector("#app-filter").addEventListener("click", (e) => {
    if (e.target.id.includes("filter")) {
      const [, filterType] = e.target.id.split("-");
      todosOnDom(filterType);
    }
  });
};

// INITIAL DOM LOAD
const buildDom = () => {
  // ******** SESSION 12
  renderToDom("#app-form", form); // ADD THE HTML FORM TO THE DOM
  renderToDom("#app-filter", filterButtons); // ADD THE FILTER BUTTONS TO THE DOM
  // ******** SESSION 12

  // todosOnDom();
  // formEvent(); // EVENTS ALWAYS AT THE BOTTOM
  // filterEvents(); // EVENTS ALWAYS AT THE BOTTOM
  // todoEvents(); // EVENTS ALWAYS AT THE BOTTOM
};

buildDom();
