import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  }
]

export function NavOptions() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
        >
          <View>
          <Image
            source={{uri: item.image}}
            className="h-24 w-24 object-contain"
          />
          <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}