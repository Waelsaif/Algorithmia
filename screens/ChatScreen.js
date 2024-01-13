import { View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useStore from "../zustand/store"
import React, { useEffect, useState } from 'react'
import ChatContent from '../components/ChatScreen/ChatContent';
import sendReq from '../GPT-API/SendReq';

export default function ChatScreen({ route }) {
	const item = route.params
	const navigation = useNavigation()
	const [inputValue, setInputValue] = useState("")
	const { addReq, chats, addNewChat } = useStore()
	
	const handleMessage = () => {
		addReq({ id: item.id, message:inputValue})
		setInputValue("")
	}
	const goBack = () => {
		if (chats[0].chatReq.length > 0){
			addNewChat({ id: chats.length, chatReq: chats[0].chatReq, chatRes: chats[0].chatRes})
		}
		navigation.goBack()
	}
	
	return (
		<SafeAreaView style={tw`flex-1`}>
			<View style={tw`flex-row justify-center items-center pb-1`}>
				<Ionicons onPress={goBack} name='arrow-back' style={tw`text-3xl absolute left-2 text-purple-700`} />
				<Image style={tw`w-40 h-12 `} source={require("../assets/Algorithmia-logo.png")} />
			</View>
			<ChatContent id={item.id} />
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : null}
				keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}>
				<View style={tw`w-11/12 mx-auto flex-row justify-between items-center mt-3 border-b-[6px] border-r-[6px] border-t-2 border-l-2 rounded-2xl pb-1 px-3`}>
					<TextInput value={inputValue}
						onChangeText={text => setInputValue(text)} placeholder='Message' placeholderTextColor="#333" style={tw`flex-1 text-xl`} />
					<TouchableOpacity onPress={handleMessage}>
						<Ionicons name='arrow-up-circle-sharp' style={tw`text-4xl text-purple-700`} />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView >
	)
}