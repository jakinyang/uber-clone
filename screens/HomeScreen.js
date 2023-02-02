import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';

// Redux
import { setOrigin, setDestination } from '../slices/navSlice';

// Components
import { NavOptions } from '../components/NavOptions';


export function HomeScreen() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />

        <GooglePlacesAutocomplete 
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en'
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null));
          }}
          returnKeyType={"search"}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={500}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}