import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from "../../data/data.json"
import { useNavigation } from '@react-navigation/native';
import React from 'react'


export default function ConvoExamples() {
	const navigation = useNavigation()
	const Data = data
	const handleClick = (item) => {
		navigation.navigate("Chat", item)
	}
  return (
	  <View style={tw`mb-5`}>
		  <View style={tw`flex-row justify-between items-center`}>
			  <Text style={tw`text-lg p-1 font-semibold`}>New Chat</Text>
			  <Text style={tw`text-lg p-1 text-gray-400`}>View all</Text>
		  </View>
		  <FlatList
			  data={Data}
			  horizontal={true}
			  showsHorizontalScrollIndicator={false}
			  keyExtractor={item => item.id}
			  renderItem={({ item }) =>
				  <TouchableOpacity onPress={() => handleClick(item)} style={tw`w-36 px-2 mr-4 border-b-8 border-r-8 border-t-2 border-l-2 rounded-xl h-44 justify-center items-center`} border-2 border-red-500 >
					  <Icon name={item.iconName} style={tw`text-3xl`} />
					  <Text style={tw`italic text-center text-sm`} >{item.type}</Text>
					  {item.id === 0 ? <Text style={tw`font-semibold text-center text-xl`} >{item.title}</Text> : <Text style={tw`font-semibold text-center `} >{item.title}</Text>}
				  </TouchableOpacity>
			  }
		  />
	  </View>
  )
}