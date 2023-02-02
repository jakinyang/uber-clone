import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base';
import { useSelector } from 'react-redux';
import { selectorTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "UberLUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]

const SURGE_CHARGE = 1.5;

export function RideOptionsCard() {
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectorTravelTimeInformation)
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView
      className="bg-white"
    >
      <View>
        <TouchableOpacity
          className="absolute top-3 left-5 p-3 z-50"
          onPress={() => navigation.goBack()}
        >
          <Icon
            name='chevron-left'
            type='fontawesome'
          />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let style = "flex-row items-center justify-between px-10"
          if (item.id === selected?.id) style += " bg-gray-200"
          return (
            <TouchableOpacity
              className={style}
              onPress={() => { setSelected(item) }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contian"
                }}
                source={{ uri: item.image }}
              />
              <View className="-ml-6">
                <Text className="font-semibold text-lg">{item.title}</Text>
                <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
              </View>
              <Text className="text-xl">
                {new Intl.NumberFormat('en-ca', {
                  style: 'currency',
                  currency: "CAD"
                }).format(
                  (travelTimeInformation?.duration?.value * SURGE_CHARGE * item.multiplier) / 100
                )}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          className="bg-black py-3 m-3"
          style={!selected && { backgroundColor: "lightslategray" }}
          disabled={!selected}
        >
          <Text
            className="text-center text-white text-lg"
          >Choose {selected?.title || "a Ride"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}