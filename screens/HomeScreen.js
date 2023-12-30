import { View, SafeAreaView } from 'react-native';
import React from 'react'
import HomeScreenHeader from '../components/HomeScreen/Header';
import Examples from '../components/HomeScreen/Examples';
import ChatHistory from '../components/HomeScreen/ChatHistory';

export default function HomeScreen() {
	return (
		<SafeAreaView>
			<View style={{marginHorizontal:8}}>
				<HomeScreenHeader />
				<Examples />
				<ChatHistory />
			</View>
		</SafeAreaView>
	)
}