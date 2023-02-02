import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { NavigateCard } from './NavigateCard';
import { Map } from '../components/Map'
import { RideOptionsCard } from './RideOptionsCard';
import { Icon } from '@rneui/base';

export function MapScreen() {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  return (
    <View>
      <TouchableOpacity 
      className="absolute top-16 left-8 z-50 bg-gray-100 shadow-lg rounded-full p-3" 
      onPress={() => navigation.goBack()}
      >
        <Icon 
          name='menu'
        />
      </TouchableOpacity>
      <View className="h-1/2" >
        <Map />
      </View>
      <View className="h-1/2" >
        <Stack.Navigator>
          <Stack.Screen 
            name="NavigateCard"
            component={NavigateCard}
          />
          <Stack.Screen 
            name="RideOptionsCard"
            component={RideOptionsCard}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}