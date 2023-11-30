# React-Fragmate

React-Fragmate is a lightweight and easy-to-use utility designed to handle HTML parsing in React applications. It is particularly useful for removing unwanted wrappers generated when rendering HTML strings using React's `dangerouslySetInnerHTML`. 

React-Fragmate ensures that your final HTML output is clean and free of unnecessary React-specific wrapping elements. With ES Modules, adherence to modern coding standards, and no dependencies, integrating and using React-Fragmate is straightforward.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install React-Fragmate via npm with the following command:

```bash
npm install react-fragmate
```

## Usage

1. **Importing**:

    Begin by importing the `Fragmate` function from the `react-fragmate` package:

    ```javascript
    import { Fragmate } from 'react-fragmate';
    ```

2. **Utilization**:

    Fragmate is designed to process HTML strings by temporarily wrapping them for React rendering, then removing the wrapper to provide the raw HTML output. This is particularly useful when you need to process HTML strings without the additional wrappers that React's `dangerouslySetInnerHTML` might add.

    **Basic Usage**:

    ```javascript
    // Example full-formed HTML string
    const htmlString = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Example Page</title>
        </head>
        <body>
          <div>Some content</div>
        </body>
      </html>`;

    const processedHtml = Fragmate(htmlString);
    
    // Output: the entire HTML document as a string
    console.log(processedHtml);
    ```

    **Downloading Processed HTML to a File**:

    ```javascript
    // Function to trigger a file download with the given content
    const downloadToFile = (content, filename, contentType) => {
      const a = document.createElement('a');
      const file = new Blob([content], { type: contentType });
      
      a.href = URL.createObjectURL(file);
      a.download = filename;
      a.click();

      URL.revokeObjectURL(a.href);
    };

    // Example usage of Fragmate with file download
    const htmlForDownload = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Downloadable Content</title>
        </head>
        <body>
          <div>Downloadable content</div>
        </body>
      </html>`;

    const cleanHtmlForDownload = Fragmate(htmlForDownload);

    // Trigger download of the processed HTML content
    downloadToFile(cleanHtmlForDownload, 'download.html', 'text/html');
    ```

    In this example, `Fragmate` processes a complete HTML document, and then the `downloadToFile` function is used to create a downloadable file containing the processed HTML content.

## Contributing

We encourage contributions from the community to enhance React-Fragmate. If you'd like to contribute, please fork the repository, make your changes, and open a pull request. We value your input and are eager to review and discuss your contributions.

## License

React-Fragmate is released under the [MIT License](./LICENSE), providing you with the freedom to use, modify, and distribute it as needed.
