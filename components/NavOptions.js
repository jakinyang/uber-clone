import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectorOrigin } from '../slices/navSlice';

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
  const navigation = useNavigation();
  const origin = useSelector(selectorOrigin);


  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View
            className={!origin && "opacity-20"}
          >
          <Image
            source={{uri: item.image}}
            className="h-24 w-24 object-contain"
          />
          <Text
            className="p-2 mt-2 mb-2"
          >{item.title}</Text>
          <Icon 
            style={{
              padding: 4,
              backgroundColor: "black",
              borderRadius: "50",
              width: 34,
              marginTop: 4,
              marginHorizontal: 4,
            }}
            color="white"
            name="arrowright"
            type='antdesign'
          />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}