import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { useEffect, useRef } from "react";
import Animated, {useSharedValue, useAnimatedStyle, withSpring, withTiming, } from "react-native-reanimated";

function BubbleTabIcon({ isFocused, label, iconName }: any) {
  const scale = useSharedValue(isFocused ? 1 : 0);
  const opacity = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    scale.value = isFocused ? withSpring(1) : withSpring(0);
    opacity.value = isFocused ? withTiming(1, { duration: 200 }) : withTiming(0, { duration: 200 });
  }, [isFocused]);

  const animatedLabel = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <View className="items-center">
      <View
        className={`flex-row items-center justify-center px-4 py-1 
        ${isFocused ? "bg-blue-600 rounded-2xl" : "bg-transparent px-0"} `}
      >
        <Ionicons
          name={iconName}
          size={20}
          color={isFocused ? "white" : "gray"}
        />
        <Animated.View style={animatedLabel} className="ml-2">
          {isFocused && (
            <Text className="text-white font-semibold">{label}</Text>
          )}
        </Animated.View>
      </View>
    </View>
  );
}

import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View className="flex-row bg-white p-2 border-t border-gray-200">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const iconMap: Record<string, string> = {
          index: "home",
          explore: "cube",
          verivy: "receipt-outline",
          boarding: "bar-chart",
          settings: "settings",
        };
        const iconName = iconMap[route.name] || "ellipse-outline";
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            className="flex-1 items-center"
            activeOpacity={0.8}
          >
            <BubbleTabIcon
              isFocused={isFocused}
              label={label}
              iconName={iconName}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <BubbleTabIcon isFocused={focused} label="Home" iconName="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "activity",
          tabBarIcon: ({ focused }) => (
            <BubbleTabIcon isFocused={focused} label="Explore" iconName="cube" />
          ),
        }}
      />
      <Tabs.Screen
        name="verivy"
        options={{
          title: "Verify",
          tabBarIcon: ({ focused }) => (
            <BubbleTabIcon isFocused={focused} label="Verify" iconName="receipt-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <BubbleTabIcon isFocused={focused} label="Profile" iconName="bar-chart" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <BubbleTabIcon isFocused={focused} label="Settings" iconName="settings" />
          ),
        }}
      />
    </Tabs>
  );
}
