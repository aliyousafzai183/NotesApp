import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// component
import TopNav from '../Components/topNavComponent';

export default Settings = ({ navigation }) => {
    return (
        <View style={styles.main}>
            <TopNav
                navigation={navigation}
                title={<Ionicons name="settings-outline" size={30} color="black"/>} />
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.Buttons}>
                    <Text style={styles.text}>Dark Mode</Text>
                    <Text style={styles.text}>►</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Buttons}>
                    <Text style={styles.text}>Note Lock</Text>
                    <Text style={styles.text}>►</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Buttons}>
                    <Text style={styles.text}>WaterMark</Text>
                    <Text style={styles.text}>►</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Buttons}>
                    <Text style={styles.text}>Notifications</Text>
                    <Text style={styles.text}>►</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },

    container: {
        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: "lightgray"

    },

    Buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 10
    },

    text: {
        fontSize: 20,
        color: 'black'
    }
})