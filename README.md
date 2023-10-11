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

    Begin by importing the `Fragmate` function from the `react-fragmate` package:

    ```javascript
    import { Fragmate } from 'react-fragmate';
    ```

2. **Utilization**:

    When using `dangerouslySetInnerHTML`, it can add an unwanted `div` wrapper around your HTML content. React-Fragmate simplifies HTML parsing by introducing the `Fragmate` function.

    To use it, follow these steps:

    ```javascript
    // Use the <deleteDiv> tag to specify content that should be retained
    const htmlString = "<deleteDiv>Some content</deleteDiv>";
    const cleanedHtml = Fragmate(htmlString);
    
    // Output: 'Some content'
    console.log(cleanedHtml);
    ```

## Contributing

    We encourage contributions from the community to enhance React-Fragmate. If you'd like to contribute, please fork the repository, make your changes, and open a pull request. We value your input and are eager to review and discuss your contributions.

## License

React-Fragmate is released under the [MIT License](./LICENSE), providing you with the freedom to use, modify, and distribute it as needed.
