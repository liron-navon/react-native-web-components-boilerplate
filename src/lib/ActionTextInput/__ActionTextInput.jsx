import React from "react";
import {View, Button, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    button: {
        color: 'white'
    },
    text: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 2
    },
    root: {
        display: 'flex',
        flexDirection: 'row'
    }
});

const propTypes = {
    onAction: PropTypes.func,
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    buttonColor: PropTypes.string,
};

const ActionTextInput = ({ label, placeholder, value = '', onChange, onAction, buttonColor = '#841584' }) => {
    return (
            <View style={styles.root}>
                <TextInput
                    placeholder={placeholder}
                    style={styles.text}
                    onChangeText={onChange}
                    value={value}
                />
                <Button
                    color={buttonColor}
                    accessibilityLabel={"hello button"}
                    onPress={onAction}
                    title={label}
                />
            </View>
    )
};

ActionTextInput.propTypes = propTypes;
export default ActionTextInput;
