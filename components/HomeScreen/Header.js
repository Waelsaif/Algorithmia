import { View, Image } from 'react-native'
import tw from 'twrnc';
import React from 'react'

export default function HomeScreenHeader() {
  return (
	  <View style={tw`justify-between items-center flex-row mb-3`}>
		  <Image style={tw`w-40 h-12`} source={{ uri: "https://venturebeat.com/wp-content/uploads/2017/06/al001c_logo_logotype_large.png?fit=2761%2C2071&strip=all" }} />
		  <Image style={tw`w-12 h-12`} source={require("../../assets/avatar.png")} />
	  </View>
  )
}