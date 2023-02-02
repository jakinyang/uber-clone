import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';

// Components
import { setDestination } from '../slices/navSlice';
import { NavFavourites } from '../components/NavFavourites';
import { Icon } from '@rneui/base';

export function NavigateCard() {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView className="bg-white flex-1">

      <Text className="text-center py-5 text-xl">NavigateCard</Text>

      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                backgroundColor: "white",
                paddingTop: 20,
                flex: 0,
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
                fontSize: 18,
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              }
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en'
            }}
            onPress={(data, details = null) => {
              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description
              }));
              navigation.navigate('RideOptionsCard');
            }}
            returnKeyType={"search"}
            fetchDetails={true}
            minLength={2}
            enablePoweredByContainer={false}
            placeholder='Where To?'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={300}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        className="flex-row bg-white justify-evenly py-2 mt-2 border-t border-gray-100"
      >
        <TouchableOpacity
          className="flex-row bg-black w-24 px-4 py-3 rounded-full justify-between"
          onPress={() => navigation.navigate('RideOptionsCard')}
        >
          <Icon
            name='car'
            type='font-awesome'
            color="white"
            size={16}
          />
          <Text className="text-white text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row bg-gray-300 w-24 px-4 py-3 rounded-full justify-between">
          <Icon
            name='car'
            type='font-awesome'
            color="black"
            size={16}
          />
          <Text className="text-black text-center">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}