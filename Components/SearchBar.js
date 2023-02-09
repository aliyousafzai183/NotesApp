import { TextInput, View, StyleSheet } from "react-native";

export default Bar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.title}
                style={styles.textinput}
            />
        </View>
    )
}

const styles  = StyleSheet.create({
    textinput:{
        backgroundColor:'white',
        borderRadius:40,
        padding:8,
        paddingLeft:20,
    }
})