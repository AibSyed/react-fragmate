# React-Fragmate

React-Fragmate is a lightweight and easy-to-use utility designed to handle HTML parsing in React applications. Specifically, it removes unwanted `div` wrappers generated when using `dangerouslySetInnerHTML`. With ES Modules, modern coding standards, and no dependencies, integrating and using React-Fragmate is a breeze.

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
    Import the `Fragmate` function from the `react-fragmate` package in your file.
    ```javascript
    import { Fragmate } from 'react-fragmate';
    ```

2. **Utilization**:
    Utilize the `Fragmate` function to process the HTML content. The function will automatically remove any unwanted `deleteDiv` tags from the given HTML string.

    ```javascript
    const htmlString = "<deleteDiv>Some content</deleteDiv>";
    const cleanedHtml = Fragmate(htmlString);
    
    // Output: 'Some content'
    console.log(cleanedHtml);
    ```

## Contributing

We welcome contributions from the community. If you'd like to contribute, please fork the repository, make your changes, and open a pull request. We'd be happy to discuss and review your changes to get them merged in!

## License

React-Fragmate is [MIT licensed](./LICENSE).
