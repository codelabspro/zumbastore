
import React, { Component } from 'react';
import { Container, Button, Text, View } from 'native-base';

export default class Header extends Component {
        constructor(props) {
                super(props);
        }
        render() {
                const { textStyle, viewStyle } = styles;
                return (
                        <View style={viewStyle}>
                                        <Text style={textStyle}>
                                               {this.props.headerText} 
                                        </Text>
                        </View>
                );
        }
}

const styles = {
        viewStyle: {
                backgroundColor: '#F8F8F8',
                justifyContent: 'center',
                alignItems: 'center',
                height: 120,
                paddingTop: 60,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                elevation: 2,
                position: 'relative',
        },
        textStyle: {
                fontSize: 20
        }
};
