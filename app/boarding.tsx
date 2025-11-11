import React from "react";
import { View, Text, Image,StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function Boarding() {
  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        colors={['#1E90FF', '#00CED1']}
        className="flex-1"
        start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.6 }}
      >

    <StatusBar barStyle={"light-content"} backgroundColor={'#1E90FF'}/>

  <View className="flex-1 items-center justify-center px-5">
    <Text className="text-white text-base font-semibold mb-2">Poskita</Text>
          <Text className="text-white text-2xl font-bold">Grow Your Business</Text>

    <View className="w-64 h-80 mb-6">
      <Image
        source={require('@/assets/images/nguwawor-removebg-preview.png')}
        className="w-60 h-80"
        resizeMode="contain"
      />
      <LinearGradient
        colors={['transparent', '#00CED1']}

        className="absolute bottom-0 w-full h-24"
      />
    </View>

    <Text className="text-center text-white text-sm mt-6 leading-5">
            Effortlessly manage sales, track inventory, and streamline operations
            with POSKITA—your trusted partner for business growth!
          </Text>

    <View className="absolute bottom-6 left-0 right-0 flex-row justify-between items-center px-6">
          <TouchableOpacity className="px-20 py-4 rounded-full">
            <Text className="text-white text-base font-medium">Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-white px-20 py-4 rounded-full"
            onPress={() => router.push("/explore")}
            activeOpacity={0.7}>
            <Text className="text-black text-base font-semibold">Next</Text>
          </TouchableOpacity>
        </View>
  </View>
    </LinearGradient>
      </SafeAreaView>
  );
}
