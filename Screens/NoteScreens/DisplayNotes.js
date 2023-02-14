import { View, Text, StyleSheet, Keyboard, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';

// components
import Header from '../../Components/TopHeader';
import NotesHead from '../../Components/SecondHeader';
import Bar from '../../Components/SearchBar';
import Notes from '../../Components/NotesComponent';
import AddButton from '../../Components/AddButtonComponent';

// data
import { NotesData } from '../../database/GetNotesData';

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
            {
                (isKeyboardVisible ? <View></View> : <Header icon={<Icon name='navicon' size={20} color='black' />} navigation={navigation} />)
            }
            {
                (isKeyboardVisible ? <View></View> : <NotesHead title={"notes "} icon1={<Icon name='caret-left' size={30} color='black' />} icon2={<Icon name='caret-down' size={30} color='black' />} navigation={navigation} />)
            }

            <View style={styles.onShow}>
                {
                    (isKeyboardVisible ?
                        <TouchableOpacity
                            onPress={() => Keyboard.dismiss()}
                            style={{
                                width: '10%'
                            }}
                        >
                            <Text style={styles.goBackBtn}>◀</Text>
                        </TouchableOpacity>
                        : <View></View>
                    )
                }

                <Bar title="Search notes" icon={<Icon name="search" size={20} color="black" />} visible={isKeyboardVisible} />
            </View>

            <ScrollView>
                {
                    NotesData.map((item, index) => {
                        return (
                            <Notes key={index} text={item.title} date={item.date} />
                        )
                    })
                }
            </ScrollView>
            
            <View style={styles.addbtn}>
                <AddButton icon={<Icon1 name="pluscircle" size={40} color="#1b93cf"/>} navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "lightgray"
    },

    onShow: {
        flexDirection: 'row'
    },

    goBackBtn: {
        fontSize: 30,
        color: 'black'
    },

    addbtn:{
        position:'absolute',
        bottom:'3%',
        right:'5%'
    }

})