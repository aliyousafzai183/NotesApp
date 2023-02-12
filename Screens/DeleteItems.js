import {Text,View} from 'react-native';

// component
import TopNav from '../Components/topNavComponent';

export default DeleteItems = ({navigation}) => {
    return (
        <View>
            <TopNav navigation={navigation} title="Delete Items"/>
        </View>
    )
}