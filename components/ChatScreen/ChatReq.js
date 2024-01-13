import { View, Text,Image } from 'react-native'
import tw from 'twrnc';

import React from 'react'

export default function ChatReq({message}) {
  return (
	  <View style={tw`flex-row justify-end my-2`}>
		  <View style={tw`max-w-4/5`}>
			  <View style={tw`flex-row items-center gap-1 justify-end pb-1`}>
				  <Text style={tw`flex-row items-center`}>Waelsi</Text>
				  <Image style={tw`w-10 h-10`} source={require("../../assets/avatar.png")} />
			  </View>
			  <View style={tw`w-full p-4 rounded-xl border-b-4 border-r-4 border-t-2 border-l-2 `} >
				  <Text style={tw`text-lg`}>
					  {message}
				  </Text>
			  </View>
		  </View>
	  </View>
  )
}