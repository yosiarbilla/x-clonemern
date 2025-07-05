import { View, Text, Button } from 'react-native';
import { useClerk } from '@clerk/clerk-expo';

export default function HomeScreen() {
  const { signOut } = useClerk();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => signOut()} title="Sign Out" />
    </View>
  );
}