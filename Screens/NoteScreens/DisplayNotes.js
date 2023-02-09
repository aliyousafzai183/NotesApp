import { View, Text, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';

// components
import Header from '../../Components/TopHeader';
import NotesHead from '../../Components/SecondHeader';
import Bar from '../../Components/SearchBar';
import Notes from '../../Components/NotesComponent';
import { ScrollView } from 'react-native-gesture-handler';

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
                (isKeyboardVisible ? <View></View> : <Header icon=": :" navigation={navigation} />)
            }
            {
                (isKeyboardVisible ? <View></View> : <NotesHead title="notes" navigation={navigation} />)
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

                <Bar title="Search notes" visible={isKeyboardVisible} />
            </View>

            <ScrollView>
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
                <Notes text="Project Details" date="February 6, 2023" />
            </ScrollView>

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
        color:'black'
    }
})