import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '../..';
import {action} from '@storybook/addon-actions';

storiesOf('Button', module)
    .add('regular', () => {
        return (
            <Button
                color={'red'}
                accessibilityLabel={"button"}
                onPress={action('onPress')}
                title="Button"
            />
        )
    });
