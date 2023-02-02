import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import { NavigateCard } from './NavigateCard';
import { Map } from '../components/Map'
import { RideOptionsCard } from './RideOptionsCard';

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
      <Text>MapScreen</Text>

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