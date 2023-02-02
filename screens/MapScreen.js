import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Map } from '../components/Map'
import { useNavigation } from '@react-navigation/native'

export function MapScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  return (
    <View>
      <Text>MapScreen</Text>

      <View className="h-1/2" >
        <Map />
      </View>
      <View className="h-1/2" >

      </View>
    </View>
  )
}