import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default TopNav = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.goBack()}
            >
                <Text style={styles.text}>◄</Text>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    container:{
        marginBottom:'4%',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:20,
        paddingRight:20
    }
})