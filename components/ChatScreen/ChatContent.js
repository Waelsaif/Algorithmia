import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import React, { useState } from 'react'
import ChatReq from './ChatReq';
import ChatRes from './ChatRes';
import useStore from "../../zustand/store";

export default function ChatContent({ id, type }) {
	let chatId = id
	const { chats, addNewChat, chatHistory } = useStore()
	const [inputChoice, setInputChoice] = useState("")
	
	const handleInputChoice = (choice) => {
		const initialMessage = [
			"What is your question?",
			"Generate a code about what?",
			"Send me your code to correct it",
			"Send me your code to give you the output"
		]
		setInputChoice(initialMessage[choice - 1])
	}

	const renderMessages = () => {
		if (type === 1) { 
			var chat = chatHistory
		}else{
			var chat = chats
		}
		console.log(chat);
		var chatIndex;
		chat.map((item, index) => {
			if (item.id === chatId) return chatIndex = index;
		})
		const messages = [];
		for (let i = 0; i < Math.max(chat[chatIndex].chatRes.length, chat[chatIndex].chatReq.length); i++) {
			if (i < chat[chatIndex].chatReq.length) {
				messages.push(<ChatReq key={`req-${i}`} message={chat[chatIndex].chatReq[i]} chatId={chatId} chatIndex={chatIndex} />);
			}
			if (i < chat[chatIndex].chatRes.length) {
				messages.push(<ChatRes key={`res-${i}`} message={chat[chatIndex].chatRes[i]} chatId={chatId} chatIndex={chatIndex} />);
			}
		}
		return messages;
	};
	return (
		<ScrollView style={tw`flex-1 bg-stone-200 p-2`}>
			<View>
				{inputChoice === "" ?
					<View style={tw`my-2`}>
						<TouchableOpacity onPress={() => handleInputChoice(1)} on style={tw`max-w-2/3 mb-2 p-3 rounded-xl border-b-[6px] border-l-[6px] border-t-2 border-r-2`}>
							<Text style={tw`text-lg`}>Answer my Questions 🤖</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleInputChoice(2)} style={tw`max-w-2/3 mb-2 p-3 rounded-xl border-b-[6px] border-l-[6px] border-t-2 border-r-2`}>
							<Text style={tw`text-lg`}>Generate a code 💻</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleInputChoice(3)} style={tw`max-w-2/3 mb-2 p-3 rounded-xl border-b-[6px] border-l-[6px] border-t-2 border-r-2`}>
							<Text style={tw`text-lg`}>Check my code ❓</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleInputChoice(4)} style={tw`max-w-2/3 mb-2 p-3 rounded-xl border-b-[6px] border-l-[6px] border-t-2 border-r-2`}>
							<Text style={tw`text-lg`}>what is the output 🤔?</Text>
						</TouchableOpacity>
					</View>
					:
					<View style={tw`max-w-2/3 `}>
						<View style={tw`flex-row items-center gap-1 pb-1`}>
							<Image style={tw`w-8 h-8 rounded-full`} source={{ uri: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/mvdkzl7kvnmrzawrdihb" }} />
							<Text style={tw`flex-row items-center`}>ALGORITHMIA</Text>
						</View>
						<View style={tw`p-3 rounded-xl border-b-[6px] border-l-[6px] border-t-2 border-r-2`} >
							<Text style={tw`text-lg`}>
								{inputChoice}
							</Text>
						</View>
					</View>
				}

				{renderMessages()}

			</View>
		</ScrollView>
	)
}