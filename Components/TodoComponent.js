import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default Todo = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <TouchableOpacity>
                <Text>{props.icon}</Text>
            </TouchableOpacity>
            {
                (
                    props.completed?<Text style={styles.text3}>{"  "+props.text}</Text>:<Text style={styles.text2}>{"  "+props.text}</Text>
                )
            }
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
        justifyContent: 'flex-start',
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
    },
    text3: {
        fontSize:15,
        color:'black',
        textDecorationLine:'line-through',
        textDecorationStyle:'solid'
    }
});