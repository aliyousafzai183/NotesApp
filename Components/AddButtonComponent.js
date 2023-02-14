import * as React from 'react';
import {TouchableOpacity, StyleSheet, Text, TextInputProps } from 'react-native';

export default Todo = (props) => {
    return (
        <TouchableOpacity onPress={()=>(props.root?props.setKeyboardVisible(true):props.navigation.navigate('Add'))}>
            <Text>{props.icon}</Text>
        </TouchableOpacity>
    )
}