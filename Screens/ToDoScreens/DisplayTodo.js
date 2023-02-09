import { View, StyleSheet, ScrollView, Text } from 'react-native';

// components
import TopHeader from '../../Components/TopHeader';
import NotesHead from '../../Components/SecondHeader';
import Todo from '../../Components/TodoComponent';

export default Display = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TopHeader icon=": :" navigation={navigation} />
            <NotesHead title="to-dos" navigation={navigation}/>

            <ScrollView style={styles.ScrollView}>
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
                <Todo text="1 Dozen Eggs" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:"#F6F6F6"
    },

    ScrollView: {
        marginTop: '2%'
    }
})