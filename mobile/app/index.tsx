import { View, Text, Button } from 'react-native';
import { useClerk } from '@clerk/clerk-expo';
import { useAuth } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';

const HomeScreen = () => {
    const {signOut}=useClerk();
    return (
        <View>
        <Text>HomeScreen</Text>
        <Button onPress={()=>signOut()} title="Sign Out" ></Button>
        </View>
    );
};

export default HomeScreen;
