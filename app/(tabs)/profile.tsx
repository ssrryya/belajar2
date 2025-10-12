import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Activity() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <TouchableOpacity
        onPress={() => router.push("/boarding")}
        className="bg-blue-100 px-5 py-3 rounded-xl"
        activeOpacity={0.7}
      >
        <Text className="text-blue-600 text-base font-semibold">
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
