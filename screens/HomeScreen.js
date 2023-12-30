import { Text, View, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import data from "../data/data.json"
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function HomeScreen() {
	const navigation = useNavigation()
	const fakeData = data
	const handleClick = ()=> {
		navigation.navigate("Chat")
	}
	return (
		<SafeAreaView>
			<View style={tw`px-5`}>
				<View style={tw`justify-between items-center flex-row mb-3`}>
					<Image style={tw`w-40 h-12`} source={{ uri: "https://venturebeat.com/wp-content/uploads/2017/06/al001c_logo_logotype_large.png?fit=2761%2C2071&strip=all" }} />
					<Image style={tw`w-12 h-12`} source={require("../assets/avatar.png")} />
				</View>
				<View style={tw`mb-5`}>
					<View style={tw`flex-row justify-between items-center`}>
						<Text style={tw`text-lg p-1 font-semibold`}>New Chat</Text>
						<Text style={tw`text-lg p-1 text-gray-400`}>View all</Text>
					</View>
					<FlatList
						data={fakeData}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						keyExtractor={item => item.id}
						renderItem={({ item }) =>
							<TouchableOpacity onPress={handleClick} style={tw`w-36 px-2 mr-4 border-b-8 border-r-8 border-t-2 border-l-2 rounded-xl shadow-2xl  h-44 justify-center items-center`} border-2 border-red-500 >
								<Icon name={item.iconName} style={tw`text-3xl`} />
								<Text style={tw`italic text-center text-sm`} >{item.type}</Text>
								{item.id === 0 ? <Text style={tw`font-semibold text-center text-xl`} >{item.title}</Text> : <Text style={tw`font-semibold text-center `} >{item.title}</Text>}
							</TouchableOpacity>
						}
					/>
				</View>
				<View style={tw`mb-5`}>
					<Text style={tw`text-lg p-1 font-semibold`}>Chat History</Text>
					<FlatList
						data={fakeData}
						showsVerticalScrollIndicator={false}
						keyExtractor={item => item.id}
						renderItem={({ item }) =>
							<TouchableOpacity style={tw`w-full px-2 mb-4 border-b-8 border-r-8 border-t-2 border-l-2 rounded-xl shadow-2xl  justify-center items-center `} border-2 border-red-500 >
								<View style={tw`p-2 w-11/12 flex-row justify-between items-center gap-3`}>
									<Ionicons name="chatbox-outline" style={tw`text-3xl`} />
									<View style={tw`flex-1`}>
										<Text style={tw`font-semibold  text-lg`} >{item.title}</Text>
										<Text style={tw`text-sm italic`} >"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem "</Text>
									</View>
								</View>
							</TouchableOpacity>
						}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}