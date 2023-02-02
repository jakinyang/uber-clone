import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base';

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

export function RideOptionsCard() {
  const [selected, setSelected] = useState(null);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView
      className="bg-white flex-grow"
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
          Select a Ride
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center justify-between px-10"
            onPress={() => {setSelected(item)}}
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
              <Text>Travel time...</Text>
            </View>
            <Text className="text-xl">$99</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}