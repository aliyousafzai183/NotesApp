import {Text,View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// component
import TopNav from '../Components/topNavComponent';

export default DeleteItems = ({navigation}) => {
    return (
        <View style={{padding:10}}>
            <TopNav navigation={navigation} title={<EvilIcons name="trash" size={40} color="black"/>}/>
        </View>
    )
}