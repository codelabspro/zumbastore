
import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';

export default class Header extends Component {
        render() {
                const { textStyle } = styles;
                return (
                                <Button>
                                        <Text style={textStyle}>
                                                Button
                                        </Text>
                                </Button>
                );
        }
}

const styles = {
        textStyle: {
                fontSize: 20
        }
};