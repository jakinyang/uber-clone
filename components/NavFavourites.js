import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "4396 Rue Boyer, Montreal, QC"
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "8628 Rue Saint-Denis, Montreal, QC"
  }
]

export function NavFavourites() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        <View className="bg-gray-200 h-0.5"></View>
      }}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            style={{
              marginRight: 4,
              borderRadius: 50,
              backgroundColor: "lightgray",
              padding: 8
            }}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}