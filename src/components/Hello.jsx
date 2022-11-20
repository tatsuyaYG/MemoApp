import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
    const { children, bang, style } = props;
    return (
        <View>
            <Text style={[styles.text, style]}>
                {`Hello ${children}${bang ? '!' : ''}`}
            </Text>
        </View>
    );
}

Hello.propTypes = {
    children: string.isRequired,
    bang: bool,
    style: shape(),
};

Hello.defaultPtops = {
    bang: false,
    style: null,
};

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 40,
        fontWeight: 'bold',
        padding: 16,
    },
});

export default Hello;