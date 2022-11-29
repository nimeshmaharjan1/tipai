import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Props } from './login';

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center gap-2">
      <Text className="font-bold text-lg">Sign Up</Text>
      <Pressable onPress={() => navigation.goBack()} className="px-4 py-2 bg-cyan-500 rounded active:bg-cyan-600 transition-all">
        <Text className="text-white">Go Back</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUpScreen;
