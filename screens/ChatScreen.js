import { View, Text, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function ChatScreen() {
	const navigation = useNavigation()

	const goBack = () => {
		navigation.goBack()
	}
	return (
		<SafeAreaView style={tw`flex-1`}>
			<View style={tw`flex-row justify-center items-center pb-1`}>
				<Ionicons onPress={goBack} name='arrow-back' style={tw`text-3xl absolute left-2 text-purple-700`} />
				<Image style={tw`w-40 h-12 `} source={{ uri: "https://venturebeat.com/wp-content/uploads/2017/06/al001c_logo_logotype_large.png?fit=2761%2C2071&strip=all" }} />
			</View>
			<ScrollView style={tw`flex-1 bg-stone-200 p-2`}>
				<View style={tw`flex-row justify-end`}>
					<View style={tw`max-w-4/5`}>
						<View style={tw`flex-row items-center gap-1 justify-end pb-1`}>
							<Text style={tw`flex-row items-center`}>Waelsi</Text>
							<Image style={tw`w-10 h-10`} source={require("../assets/avatar.png")} />
						</View>
						<View style={tw`w-full p-4 rounded-xl border-b-4 border-r-4 border-t-2 border-l-2 `} >
							<Text>
								What is Artificial Intelligence?
							</Text>
						</View>
					</View>
				</View>
				<View style={tw``}>
					<View style={tw`max-w-4/5`}>
						<View style={tw`flex-row items-center gap-1 pb-1`}>
							<Image style={tw`w-8 h-8 rounded-full`} source={{ uri: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/mvdkzl7kvnmrzawrdihb" }} />
							<Text style={tw`flex-row items-center`}>ALGORITHMIA</Text>
						</View>
						<View style={tw`w-full p-3 rounded-xl border-b-[6px] border-l-[6px] border-t-2 border-r-2`} >
							<Text>
								Artificial Intelligence (AI) refers to computer systems or machines that are designed to perform tasks that typically require human intelligence. These tasks include things like learning, reasoning, problem-solving, understanding natural language, and perception. In simpler terms, AI allows machines to mimic certain aspects of human intelligence, enabling them to perform tasks or make decisions on their own. AI applications range from voice assistants and image recognition to complex systems that play games, drive cars, and even help diagnose medical conditions.
							</Text>
						</View>
						<View style={tw`flex-row items-center gap-1 mt-2`}>
							<TouchableOpacity style={tw`p-3 rounded-xl border-b-4 border-l-4 border-t-2 border-r-2 border-blue-800`}>
								<Text>New Example</Text>
							</TouchableOpacity>
							<TouchableOpacity style={tw`p-3 rounded-xl border-b-4 border-l-4 border-t-2 border-r-2 border-green-800`}>
								<Text>Make it Simple</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : null}
				keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}>
				<View style={tw`w-11/12 mx-auto flex-row justify-between items-center mt-3 border-b-[6px] border-r-[6px] border-t-2 border-l-2 rounded-2xl pb-1 px-3`}>
					<TextInput placeholder='Message' placeholderTextColor="#333" style={tw`flex-1 text-xl`} />
					<TouchableOpacity>
						<Ionicons onPress={goBack} name='arrow-up-circle-sharp' style={tw`text-4xl text-purple-700`} />
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView >
	)
}