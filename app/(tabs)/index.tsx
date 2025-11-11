
import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity, FlatList,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ButtonIcon from "@/components/buttonicon";


const orders = [
  {
    id: "8726AB",
    title: "Breakfast Menu",
    status: "In Kitchen",
    statusColor: "orange",
    items: 4,
    table: 2,
  },
  {
    id: "8726AC",
    title: "Breakfast Menu",
    status: "Ready",
    statusColor: "green",
    items: 4,
    table: 5,
  },
];

export default function HomeScreen() {

  const renderOrder = ({ item }: any) => (
    <View className="bg-white rounded-2xl p-4 mr-3 shadow-sm w-60">
      <Text className="text-blue-600 font-semibold">{item.title}</Text>
      <View className="flex-row items-center mt-1">
        <Ionicons name="time-outline" size={16} color={item.statusColor} />
        <Text className={`ml-1 text-${item.statusColor}-500`}>
          {item.status}
        </Text>
      </View>
      <Text className="mt-2 font-medium">Order #{item.id}</Text>
      <Text className="text-gray-500">
        {item.items} Items • Table {item.table}
      </Text>
    </View>
  );

  const sections = [
    { type: "orders" },
    { type: "banner" },
    { type: "stats" },
  ];

  const renderSection = ({ item }: any) => {
    if (item.type === "orders") {
      return (
        <View>
          <Text className="mt-6 mb-2 text-lg font-semibold">Order List</Text>
          <FlatList
            data={orders}
            keyExtractor={(order) => order.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderOrder}
          />
        </View>
      );
    }

    if (item.type === "banner") {
      return (
        <LinearGradient
            colors={['#3B82F6', '#6366F1']}
            className="rounded-2xl mt-6 min-h-[160px]"
            style={{borderRadius: 20}}
            start={{ x: 0, y: 0.6 }}
            end={{ x: 1.5, y: 0 }}
            >
        <View className=" p-6 flex-1 justify-between">
          <View>
            <Text className="text-white text-sm">4 Dec 2024</Text>
            <Text className="text-white text-lg font-semibold mt-2">
            Sales Revenue Grows by{" "}
            <Text className="text-green-400">5.9% </Text>
             <Text className="text-white text-lg font-semibold mt-2"> in One Week.</Text>
          </Text>
          </View>
          
          <ButtonIcon title="see" onPress={() => (console.log("cihuyyyy"))}/>
        </View>
         </LinearGradient>
      );
    }

    if (item.type === "stats") {
      return (
        <View className="flex-row justify-between mt-6">
          <View className="bg-white rounded-2xl p-4 flex-1 mr-2 shadow-sm">
            <Text className="text-gray-500">Total Sales Revenue</Text>
            <Text className="text-2xl font-bold mt-1">$98,983</Text>
            <View className="flex-row items-center mt-1">
              <View className="shadow-sm rounded-lg w-12 h-6 bg-green-500 px-1 items-center justify-center">
            <Text className="text-white text-xs">+2.3%</Text>
            </View>
            <Text className="text-green-600 ml-1">vs last month</Text>
            </View>
          </View>

          <View className="bg-white rounded-2xl p-4 flex-1 ml-2 shadow-sm">
            <Text className="text-gray-500">Total Product Sold</Text>
            <Text className="text-2xl font-bold mt-1">6,983</Text>
            <View className="flex-row items-center mt-1">
              <View className="shadow-sm rounded-lg w-12 h-6 bg-green-500 px-1 items-center justify-center">
            <Text className="text-white text-xs">+2.3%</Text>
            </View>
            <Text className="text-green-600 ml-1">vs last month</Text>
            </View>
          </View>
        </View>
      );
    }

    return null;
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f9fafe] px-4">
      <FlatList
        data={sections}
        keyExtractor={(item, index) => `${item.type}-${index}`}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>

            <View className="flex-row justify-between items-center mt-4">
              <View>
                <Text className="text-gray-500">Hello!</Text>
                <Text className="text-xl font-semibold">Gweeny Addams</Text>
              </View>
              <Image
                source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
                className="w-12 h-12 rounded-full"
              />
            </View>

            <View className="mt-4 flex-row items-center bg-white rounded-2xl px-4 py-3 shadow-sm">
              <Ionicons name="search" size={20} color="gray" />
              <TextInput
                placeholder="Search food..."
                className="ml-2 flex-1 text-base"
              />
              <TouchableOpacity className="bg-blue-500 p-2 rounded-xl">
                <Feather name="sliders" size={18} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
      />

      <TouchableOpacity className="bg-blue-600 w-14 h-14 rounded-full absolute bottom-5 right-6 justify-center items-center shadow-lg">
        <Ionicons name="add" size={26} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
