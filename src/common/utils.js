/**
 * Turn a string into a node
 * @param  {String} htmlString to convert
 * @return {Node}   Converted node element
 */
// eslint-disable-next-line
export const createNodeFromString = (htmlString) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
};

/**
 * Gets the CSS property from the given element
 * @param {HTMLElement|Node} element
 * @param {string} propertyName
 * @return {string}
 */
export const getStyleProperty = (element, propertyName) => {
  let propertyValue = '';

  if (element.currentStyle) {
    propertyValue = element.currentStyle[propertyName];
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    propertyValue = document.defaultView
      .getComputedStyle(element, null)
      .getPropertyValue(propertyName);
  }

  return propertyValue && propertyValue.toLowerCase ? propertyValue.toLowerCase() : propertyValue;
};

