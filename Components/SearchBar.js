import { TextInput, View, StyleSheet } from "react-native";

export default Bar = (props) => {
    return (
        <View style={props.visible?styles.container1:styles.container}>
            <TextInput
                placeholder={props.title}
                placeholderTextColor="black"
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
        color:'black' 
    },

    container:{
        width:"100%"
    },

    container1:{
        width:"90%"
    }
})