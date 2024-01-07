import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Map from '../components/Map';
import tw from "tailwind-react-native-classnames";
import MapView, { Marker } from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from "../components/RideOptionsCard";

 
const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
          name='Navigation'
          component={NavigateCard}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name='RideOptionsCard'
          component={RideOptionsCard}
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})