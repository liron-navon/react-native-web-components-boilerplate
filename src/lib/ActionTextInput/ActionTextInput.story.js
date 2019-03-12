import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {ActionTextInput} from '../..';
import { action } from '@storybook/addon-actions';

class TextInputWrapper extends Component {
    state = {
        value: this.props.value || ''
    };

    onChange = (newValue) => {
        this.props.onChange && this.props.onChange(newValue);
        this.setState({
            value: newValue
        })
    };

    render() {
        return (
                <ActionTextInput {...this.props}
                                 onChange={this.onChange}
                                 value={this.state.value}/>
        )
    }
}

storiesOf('TextInput', module)
    .add('regular', () => {
        return (
                <TextInputWrapper
                                 label="Add email"
                                 placeholder={"john@doe.com"}
                                 buttonColor={"red"}
                                 onChange={action('onChange')}
                                 onAction={action('onAction')}/>
        )
    });
