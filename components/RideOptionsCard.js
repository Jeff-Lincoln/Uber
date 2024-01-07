import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "tailwind-react-native-classnames"

const RideOptionsCard = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride
      </Text>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})