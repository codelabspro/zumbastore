
import React, { Component } from 'react';
import { Container, Button, Text, View } from 'native-base';

export default class Header extends Component {
        render() {
                const { textStyle, viewStyle } = styles;
                return (
                        <View style={viewStyle}>
                                <Button>
                                        <Text style={textStyle}>
                                                Button
                                        </Text>
                                </Button>
                        </View>
                );
        }
}

const styles = {
        viewStyle: {
                backgroundColor: '#F8F8F8'
        },
        textStyle: {
                fontSize: 20
        }
};