import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import useStore from "../../zustand/store"

export default function ChatHistory() {
	const navigation = useNavigation()
	const { chats } = useStore()
	console.log(chats);
	const handleClick = (item) => {
		navigation.navigate("Chat", item)
	}
	const response = (text) => {
		if (text.length > 50) return text.slice(0, 125) + "..."
		return text
	}
	return (
		<View>
			<Text style={tw`text-lg p-1 font-semibold`}>Chat History</Text>
			<FlatList
				data={chats}
				showsVerticalScrollIndicator={false}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					item.id !== 0 &&
					<TouchableOpacity onPress={() => handleClick(item)} style={tw`w-full px-2 mb-4 border-b-8 border-r-8 border-t-2 border-l-2 rounded-xl justify-center items-center `} border-2 border-red-500 >
						<View style={tw`p-2 w-11/12 flex-row justify-between items-center gap-3`}>
							<Ionicons name="chatbox-outline" style={tw`text-3xl`} />
							<View style={tw`flex-1`}>
								<Text style={tw`font-semibold  text-lg`} >{item.chatReq[0]}</Text>
								<Text style={tw`text-sm italic`} >{response(item.chatRes[0])}</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>

	)
}