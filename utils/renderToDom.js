// utils/renderToDom.js

/**
 * Renders content to the specified DOM element
 * @param {string} divId - The ID of the element to render to (including # for ID selector)
 * @param {string} content - The content to render
 */
const renderToDom = (divId, content) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = content;
};

export default renderToDom;
