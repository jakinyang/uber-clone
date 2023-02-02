import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions';

// Component
import { GOOGLE_MAPS_API_KEY } from '@env';
import { selectorDestination, selectorOrigin } from '../slices/navSlice'

export function Map() {

  const origin = useSelector(selectorOrigin);
  const destination = useSelector(selectorDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, bottom: 50, right: 50, left: 50 }
    });
  }, [origin, destination])

  return (
    <MapView
      className="flex-1"
      mapType="mutedStandard"
      ref={mapRef}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Origin"
          description={destination.description}
          identifier="origin"
        />
      )}
    </MapView>
  )
}