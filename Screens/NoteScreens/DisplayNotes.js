import {View,Text, StyleSheet} from'react-native';

// components
import Header from '../../Components/TopHeader';
import NotesHead from '../../Components/SecondHeader';
import Bar from '../../Components/SearchBar';

export default Display = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header icon=": :" navigation={navigation}/>
            <NotesHead title="notes" navigation={navigation}/>
            <Bar title="Search notes"/>

            <Text>This is Notes Display Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:"#F6F6F6"
    }
})
;