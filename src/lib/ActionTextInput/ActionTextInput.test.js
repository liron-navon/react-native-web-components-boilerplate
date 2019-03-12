import React from 'react';
import ActionTextInput  from "./ActionTextInput";
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<ActionTextInput />).toJSON();
    expect(tree).toMatchSnapshot();
});
