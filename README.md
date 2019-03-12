# react-native-web-components-boilerplate

This is a project for building component libraries with [react-native-web](https://github.com/necolas/react-native-web), its ready with storybook, jest, and exports a UMD library that you can import to your other projects.


## Available Scripts

In the project directory, you can run:

### `npm start` or `npm run storybook`

Run storybook with HMR and auto update, use this to develop your components.

### `npm test`

Runs tests with jest.

### `npm run build`

Builds the component library change the `main` property in package.json to set the output file.

### `npm run build-storybook`

Builds the storybook as a static website, great for documentation.

### develop locally
In this project run `npm link`, and in the react-native/web project run `npm link my-library-name`.

## 3rd party requirements:

This project uses `react-native`, `react-art` and `react` as peer dependencies (for web also `react-dom`).

### Web
You will need to have `react-native-web` aliased as `react-native` (comes built in with react CRA), `react-art` (used by react native web), `react`, and `react-dom`.

### Native
You should be good to go with `react` and `react-native`.


### example

```jsx harmony
// for web it should import "react-native-web" under the alias "react-native".
import 'react-native';
// or
import { View } from 'react-native';

import {ActionTextInput} from 'react-native-web-components-boilerplate';

const MyComponent = () => {
    return (
        <ActionTextInput
             onAction={(event) => console.log('onAction', event)}
             onChange={(text) => console.log('onChange', text)}
             label="Send Email" 
        />
    )
}
```


### Structure

In order to keep the directory structure clean, you should follow this schema:

```
/src
    index.js - the index file that exports all others
    /lib
        /<Component-Name>
            <Component-Name>.jsx - the component
            <Component-Name>.story.jsx - tests
            <Component-Name>.test.jsx - documentation
```
