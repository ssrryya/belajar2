import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View, Text, TextInput, TouchableOpacity, } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function VerifyEmailScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FB]">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      <View className="px-6 pt-6">
        <TouchableOpacity
          className="w-10 h-10 bg-white rounded-full justify-center items-center shadow-sm"
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center pt-8 px-8">

        <View className="w-24 h-24 rounded-full bg-white justify-center items-center shadow-sm">
          <Feather name="lock" size={40} color="#3651d9" />
        </View>

        <Text className="text-3xl font-bold mt-6 text-black">
          Verify your email
        </Text>

        <Text className="text-center text-gray-500 mt-3 px-6">
          Please verify your email to complete registration and access your
          account securely.
        </Text>

        <View className="w-full mt-6">
          <View className="flex-row items-center bg-white rounded-full px-4 py-3 shadow-sm">
            <MaterialIcons name="email" size={20} color="#9aa0b4" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#9aa0b4"
              className="ml-3 flex-1 text-base text-black"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text className="text-sm text-gray-500 mt-3 px-1 leading-5">
            We've sent a verification to{" "}
            <Text className="text-blue-600 font-semibold">
              gweenyaddams@gmail.com
            </Text>
            . Check your inbox and confirm your registration.
          </Text>
        </View>

        <View className="flex-1" />


        <TouchableOpacity
          activeOpacity={0.85}
          className="w-full bg-[#3651d9] py-4 rounded-full justify-center items-center mb-6"
          onPress={() => router.push("/verivy")}

        >
          <Text className="text-white text-base font-medium">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
