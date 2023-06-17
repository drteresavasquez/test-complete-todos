const todoArray = [];

// ITERATION
const todosOnDom = () => {
  let domString = "PUT TODO INFO HERE";

  renderToDom("#app-todos", domString);
};

const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
};

const buildDom = () => {
  todosOnDom();
};

buildDom();
