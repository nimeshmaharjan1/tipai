import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className="py-4 px-6 dark:bg-neutral-800 flex-1 ">
      <Text className="text-white">LoginScreen</Text>
      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;
