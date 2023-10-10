// index.js

/**
 * Removes specified wrapper divs from the given HTML string.
 *
 * @param {string} html - The HTML string to process.
 * @returns {string} - The processed HTML string.
 */
 export function Fragmate(html) {
    if (typeof html !== 'string') return html;
    return html.replace(/<deleteDiv>/g, '').replace(/<\/deleteDiv>/g, '');
  }
  