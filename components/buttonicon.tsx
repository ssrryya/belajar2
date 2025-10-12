import React from "react";
import { View, Text, Pressable } from "react-native";
import {BlurView} from "expo-blur";
import { Button } from "@react-navigation/elements";

type ButtonIconProps ={
    title: string,
    onPress: () => void,
}

const ButtonIcon = ({onPress, title}: ButtonIconProps) => {
    return(
    <Pressable
    onPress={onPress}
    className= "overflow-hidden rounded-full"
    style={{
        width: 100,
        height: 25,
        marginBottom: 10,
    }}
    >
        <BlurView
        intensity={30}
        tint="dark"
        className="absolute inset-0"/>

        <View className="flex--row items-center justify-center h-full 
                   border border-white/50 rounded-full ">
            <Text className="text-white/80 text-lg font-semibold tracking-wide mr-2">{title}</Text>
        </View>
        
    </Pressable>
)}
export default ButtonIcon;