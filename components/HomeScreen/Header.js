import { View, Image } from 'react-native'
import tw from 'twrnc';
import React from 'react'

export default function HomeScreenHeader() {
  return (
	  <View style={tw`justify-between items-center flex-row mb-3`}>
		  <Image style={tw`w-40 h-12`} source={require("../../assets/Algorithmia-logo.png")} />
		  <Image style={tw`w-12 h-12`} source={require("../../assets/avatar.png")} />
	  </View>
  )
}