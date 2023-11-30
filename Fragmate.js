import React from 'react';
import ReactDOMServer from 'react-dom/server';

/**
 * Fragmate processes an HTML string by wrapping it with a unique temporary React element
 * and then renders it to a static HTML string. After rendering, it removes the wrapper
 * to provide the raw HTML output. This function is particularly useful in scenarios
 * where raw HTML is required without the additional wrapping elements typically added
 * by React's rendering process.
 *
 * @param {string} htmlContent - The HTML string to be processed.
 * @returns {string} - The processed HTML string, free of the temporary wrapper.
 */

export function Fragmate(htmlContent) {
  if (typeof htmlContent !== 'string') {
    console.error('Fragmate requires a string as input.');
    return '';
  }

  // Wrapping the HTML content within a custom React element (fragmatewrapper)
  // and using dangerouslySetInnerHTML to treat the content as HTML.
  const wrappedHtml = ReactDOMServer.renderToStaticMarkup(
    <fragmatewrapper dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );

  // Define regular expressions to target the opening and closing tags
  // of the temporary fragmatewrapper element.
  const wrapperOpenTagRegex = /<fragmatewrapper[^>]*>/;
  const wrapperCloseTagRegex = /<\/fragmatewrapper>/;

  // Remove the fragmatewrapper tags to extract the clean, raw HTML content.
  const cleanHtml = wrappedHtml.replace(wrapperOpenTagRegex, '').replace(wrapperCloseTagRegex, '');

  // Return the processed HTML string, now free from the temporary wrapper.
  return cleanHtml;
}
