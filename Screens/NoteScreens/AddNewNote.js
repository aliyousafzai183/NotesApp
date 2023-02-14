import { View, Text, StyleSheet, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
// component
import TopNav from '../../Components/topNavComponent';
import { SelectList } from 'react-native-dropdown-select-list'

export default Settings = ({ navigation }) => {
    const [title, setTitle] = useState(null);
    const [text, setText] = useState(null);
    const [category, setCategory] = useState("no-category");
    const data = [
        { key: '1', value: 'no category' },
        { key: '2', value: 'work' },
        { key: '3', value: 'personal' },
        { key: '4', value: 'life' },
        { key: '5', value: 'important' },
    ]

    return (
        <View style={styles.main}>

            <TopNav
                navigation={navigation}
                title={<AntDesign name="check" size={30} color="black" />}
            />

            <TextInput
                placeholder='Title'
                placeholderTextColor="gray"
                editable
                style={styles.input1}
                onChangeText={setTitle}
                value={title}
            />

            <View style={styles.date_category}>
                <Text style={styles.text}>Today 10:32 PM</Text>

                <View style={styles.dropdown}>
                    <SelectList
                        onSelect={(txt) => setCategory(txt)}
                        setSelected={setCategory}
                        fontFamily='lato'
                        data={data}
                        arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />}
                        searchicon={<FontAwesome name="search" size={12} color={'black'} />}
                        search={true}
                        boxStyles={{ borderRadius: 40, width: '55%', borderWidth: 0 }} //override default styles
                        inputStyles={{ fontSize: 13, backgroundColor:'lightgray', borderRadius:30, padding:3,color:'black' }}
                        dropdownStyles={{ width: '75%', borderWidth: 0, backgroundColor: 'lightgray' }}
                        dropdownItemStyles={{ borderBottomWidth: 1, borderColor: 'white',color:"black" }}
                        defaultOption={{ key: '1', value: 'no-category' }}   //default selected option
                        dropdownTextStyles={{color:'black', fontSize:15}}
                    />
                </View>

            </View>

            <TextInput
                style={styles.input2}
                placeholder='Write notes here . . .'
                placeholderTextColor="gray"
                scrollEnabled
                editable
                multiline
                onChangeText={setText}
                value={text}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },

    text: {
        fontSize: 13,
        color: 'darkgray'
    },

    input1: {
        fontSize: 30,
        color: 'black'
    },

    input2: {
        fontSize: 20,
        color: 'black',
    },

    date_category: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-between'
    },

    dropdown:{
        width:'60%'
    }
})