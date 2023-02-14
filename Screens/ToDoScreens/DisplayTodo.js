import { View, StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
// Import vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

// components
import TopHeader from '../../Components/TopHeader';
import NotesHead from '../../Components/SecondHeader';
import Todo from '../../Components/TodoComponent';
import AddButton from '../../Components/AddButtonComponent';

// data
import { TodoData } from '../../database/GetTodoData';

export default Display = ({ navigation }) => {

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <TopHeader icon={<FontAwesome name='navicon' size={20} color='black' />} navigation={navigation} />
            <NotesHead title="to-dos" icon1={<FontAwesome name='caret-left' size={30} color='black' />} icon2={<FontAwesome name='caret-down' size={30} color='black' />} navigation={navigation} />

            <ScrollView style={styles.ScrollView}>
                {
                    TodoData.map((item, index) => {
                        if(!item.completed){
                            return (
                                <Todo key={index} text={item.text} completed={item.completed} icon={<FontAwesome name="circle-thin" size={22} color="black" />} />
                            )
                        }
                    })
                }
                <Text style={styles.complete}>Completed To-dos</Text>
                {
                    TodoData.map((item, index) => {
                        if(item.completed){
                            return (
                                <Todo key={index} text={item.text} completed={item.completed} icon={<AntDesign name="checkcircle" size={22} color="black" />} />
                            )
                        }
                    })
                }


            </ScrollView>



            {
                (isKeyboardVisible ? <View></View> :
                    <View style={styles.addbtn}>
                        <AddButton icon={<AntDesign name="pluscircle" size={40} color="#1b93cf" />}
                            setKeyboardVisible={setKeyboardVisible} root={true}
                        />
                    </View>
                )
            }

            {
                (isKeyboardVisible ? <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='To-do'
                        style={styles.addInput}
                        placeholderTextColor='black'
                        multiline
                        editable
                        scrollEnabled
                        numberOfLines={1.5}
                    />
                    <View style={styles.inputContainer1}>
                        <View style={styles.inputContainer2}>
                            <TouchableOpacity style={styles.alarmButton}><Text><Ionicons name="alarm-outline" size={30} color="black" /></Text></TouchableOpacity>
                            <TouchableOpacity><Text><AntDesign name="exclamation" size={30} color="black" /></Text></TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer2}>

                            <TouchableOpacity onPress={() => setKeyboardVisible(false)}>
                                <Text>
                                    <Entypo name="cross" size={35} color="#f44336" />
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => Keyboard.dismiss()}>
                                <Text>
                                    <Entypo name="check" size={35} color="#008CBA" />
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View> : <View></View>)
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "lightgray"
    },

    ScrollView: {
        marginTop: '2%'
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '5%'
    },

    addbtn: {
        position: 'absolute',
        bottom: '3%',
        right: '5%',
    },

    addInput: {
        backgroundColor: 'white',
        borderRadius: 40,
        paddingLeft: 20,
        fontSize: 15,
        marginBottom: '3%',
        color:'black'
    },

    inputContainer: {
        paddingTop: 10,
        flexDirection: 'column',
    },

    inputContainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputContainer2: {
        width:'20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    btnText: {
        color: 'white'
    },

    complete:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        marginTop:'3%'
    }
})