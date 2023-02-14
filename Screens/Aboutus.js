import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

// Component
import TopNav from '../Components/topNavComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <TopNav navigation={navigation} title={<Ionicons name="md-information-circle-outline" size={35} color="black"/>} />
                <Text style={styles.heading}>Notepad - Notes</Text>
                <Text style={styles.text}>Notes is free, full-featured and easy to use notepad/todo app for Android and IOS.</Text>
                <Text style={styles.text}>You can use it as a digital notebook or diary.</Text>
                <Text style={styles.text}>Our app is also perfect for recording lectures, business meetings and interviews.</Text>
                <Text style={styles.text}>It saves your inspirations, holiday plans, shopping lists or anything you want to organize or remember!</Text>
                <Text style={styles.text}>Colors and tags help you to organize and classify everything.</Text>
                <Text style={styles.heading}>Follow us!</Text>
                <View style={styles.social}>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.facebook.com/profile.php?id=100088768002424&mibextid=ZbWKwL');
                    }} style={styles.button}>
                        <Text style={styles.btnText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.linkedin.com/in/ali-said-047010223/');
                    }} style={styles.button}>
                        <Text style={styles.btnText}>LinkedIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://instagram.com/warisallah923?igshid=ZDdkNTZiNTM=');
                    }} style={styles.button}>
                        <Text style={styles.btnText}>Instagram</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://github.com/aliyousafzai183');
                    }} style={styles.button}>
                        <Text style={styles.btnText}>Github</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.heading}>Developed by Ali Yousafzai</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        flexDirection:'column',
        justifyContent:'space-between'
    },

    text: {
        fontSize: 20,
        color: 'grey'
    },

    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign:'center'
    },

    button: {
        backgroundColor: 'gray',
        padding: 5,
        borderRadius: 30
    },

    social: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },

    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }

})