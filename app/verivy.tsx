import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function VerifyCodeScreen() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];

  function onPressBack() {
    router.back();
  }

  function setDigit(index: number, val: string) {
    if (!/^[0-9]?$/.test(val)) return;
    const next = [...code];
    next[index] = val;
    setCode(next);
    if (val && index < 3) inputs[index + 1].current?.focus();
    if (!val && index > 0) inputs[index - 1].current?.focus();
  }

  const allFilled = code.every(c => c !== '');

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FB]">
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <View className="px-6 pt-6">
          <TouchableOpacity onPress={onPressBack} className="w-10 h-10 items-center justify-center bg-white rounded-full shadow-sm">
            <Ionicons name="chevron-back" size={20} />
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center justify-start px-6">
          <View className="w-20 h-20 bg-white rounded-full items-center justify-center mt-6 shadow">
            <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center">
              <Ionicons name="mail-outline" size={24} />
            </View>
          </View>

          <Text className="text-3xl font-semibold text-gray-900 mt-6">Enter Verification Code</Text>
          <Text className="text-center text-sm text-gray-500 mt-2 px-6">
            We've sent a verification code to your email address. Please check your inbox and enter the code below to verify your account.
          </Text>

          <View className="flex-row mt-6 space-x-4">
            {code.map((digit, i) => (
              <TextInput
                key={i}
                ref={inputs[i] as any}
                value={digit}
                onChangeText={(t) => setDigit(i, t.slice(-1))}
                keyboardType="number-pad"
                maxLength={1}
                className="w-16 h-16 bg-white rounded-full text-2xl font-medium text-gray-900 text-center shadow"
              />
            ))}
          </View>

          <Text className="text-sm text-gray-500 mt-4">If you didn't receive the email, tap <Text className="text-blue-600">Resend Code</Text> to get a new one.</Text>

          <TouchableOpacity
            disabled={!allFilled}
            className={`mt-6 w-full ${allFilled ? 'opacity-100' : 'opacity-60'}`}
            style={{ width: width - 48 }}
            onPress={() => {
              router.push('/(tabs)');
            }}
          >
            <View className="h-12 bg-blue-600 rounded-full items-center justify-center">
              <Text className="text-white font-medium">Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
