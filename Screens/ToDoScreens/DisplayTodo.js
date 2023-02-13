import { View, StyleSheet, ScrollView, Text } from 'react-native';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

// components
import TopHeader from '../../Components/TopHeader';
import NotesHead from '../../Components/SecondHeader';
import Todo from '../../Components/TodoComponent';

export default Display = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TopHeader icon={<Icon name='navicon' size ={20} color='black'/>} navigation={navigation} />
            <NotesHead title="to-dos" icon1={<Icon name='caret-left' size ={30} color='black'/>} icon2={<Icon name='caret-down' size ={30} color='black'/>} navigation={navigation}/>

            <ScrollView style={styles.ScrollView}>
                <Todo text="1 Dozen Eggs" icon={<Icon name="circle-thin" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon name="circle-thin" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon name="circle-thin" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon name="circle-thin" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon name="circle-thin" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon name="circle-thin" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon name="circle-thin" size={22} color="black"/>}/>
                <Text style={styles.text}>Completed</Text>
                <Todo text="1 Dozen Eggs" icon={<Icon1 name="checkcircle" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon1 name="checkcircle" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon1 name="checkcircle" size={22} color="black"/>}/>
                <Todo text="1 Dozen Eggs" icon={<Icon1 name="checkcircle" size={22} color="black"/>}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:"lightgray"
    },

    ScrollView: {
        marginTop: '2%'
    },
    
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginTop:'5%'
    }
})