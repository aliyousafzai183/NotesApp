import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default Todo = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}></Text>
            </TouchableOpacity>
            <Text style={styles.text2}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 40,
        padding: 20,
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    text: {
        borderWidth: 2,
        width: 23,
        height: 23,
        borderRadius: 40,
        marginRight:'2%',
        color:'black'
    },

    text2: {
        fontSize:15,
        color:'black'
    }
});