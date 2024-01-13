import { View, Text, Image, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import useStore from '../../zustand/store';
import React from 'react'

export default function ChatRes({message, chatId, chatIndex}) {
	console.log(chatId);
	const {addReq, chats} = useStore()
	const newExample = ()=> {
		const prevReq = chats[chatIndex].chatReq[chats[chatIndex].chatReq.length-1]
		addReq({ id: chatId, message:`give me a new example of "${prevReq}"`})
	}
	const makeItSimple = ()=> {
		const prevReq = chats[chatIndex].chatReq[chats[chatIndex].chatReq.length-1]
		addReq({ id: chatId, message: `"${prevReq}" your answer should be simple and shorter `})
	}
	return (
		<View style={tw`my-2`}>
			<View style={tw`max-w-4/5`}>
				<View style={tw`flex-row items-center gap-1 pb-1`}>
					<Image style={tw`w-8 h-8 rounded-full`} source={{ uri: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/mvdkzl7kvnmrzawrdihb" }} />
					<Text style={tw`flex-row items-center`}>ALGORITHMIA</Text>
				</View>
				<View style={tw` p-3 rounded-xl border-b-[6px] border-l-[6px] border-t-2 border-r-2`} >
					<Text style={tw`text-lg`}>
						{message}
					</Text>
				</View>
				<View style={tw`flex-row items-center gap-1 mt-2`}>
					<TouchableOpacity onPress={newExample} style={tw`p-3 rounded-xl border-b-4 border-l-4 border-t-2 border-r-2`}>
						<Text>New Example</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={makeItSimple} style={tw`p-3 rounded-xl border-b-4 border-l-4 border-t-2 border-r-2`}>
						<Text>Make it Simple</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}