import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default Todo = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
            <Text style={styles.text2}>{props.date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        marginTop: '5%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },

    text: {
        marginRight:'2%',
        fontSize:15,
        color:'black'
    },

    text2: {
        fontSize:12,
    }
});