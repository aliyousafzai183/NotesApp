import {View, TouchableOpacity,Text, StyleSheet} from 'react-native';

export default Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>props.navigation.getParent().openDrawer()}>
                <Text style={styles.text}>{props.icon}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row-reverse'
    },
    
    text:{
        fontSize:20,
        padding:'3%',
        fontWeight:'bold'
    }
});