import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default NotesHead = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Text style={styles.text}>All {props.title} { (useDrawerStatus() === 'open' ? "►" : "▼")} </Text>
            </TouchableOpacity>
            <Text style={styles.text2}>0 {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '10%'
    },

    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'black'
    },

    text2: {
        fontSize: 15,
        color: 'black'
    }
})
