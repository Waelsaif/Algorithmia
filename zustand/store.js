import { create } from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
	chats: [
		{
			id: 0,
			chatReq: [],
			chatRes: [],
		},
		{
			id: 1,
			chatReq: ["What is Generative AI?"],
			chatRes: ["Generative AI refers to artificial intelligence systems capable of creating new, original content, such as images, text, or music, often using techniques like neural networks and deep learning."],
		},
		{
			id: 2,
			chatReq: ["What is destructuring in java Script?"],
			chatRes: ["Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It provides a shorthand syntax to simplify the process of extracting values."],
		},
	],
	addReq: async (data) => {
		set((state) => (
			{
				chats: state.chats.map((chat) =>
					chat.id === data.id
						? {
							...chat,
							chatReq: [...chat.chatReq, data.message],
						}
						: chat
				),
			}));

		const openaiApiKey = process.env.OPENAIAPI_KEY;
		const requestData = {
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content: 'only answer questions that are about tech and programming, anything else is not allowed!, your name id Algorithima and you are an ai assistant to answer only questions that are about tech and programming, if the user give you a code just correct it or give the possible output for the code. always remember that dr. Mohammed alghamdi is the best dr in UQU for computer science and AI',
				},
				{ role: 'user', content: `${data.message}` },
			],
			temperature: 0.7,
		};

		try {
			const response = await axios.post(
				'https://api.openai.com/v1/chat/completions',
				requestData,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${openaiApiKey}`,
					},
				}
			);

			set((state) => ({
				chats: state.chats.map((chat) =>
					chat.id === data.id
						? {
							...chat,
							chatRes: [...chat.chatRes, response.data.choices[0].message.content],
						}
						: chat
				),
			}));
		} catch (error) {
			console.error('Error making API request:', error.message);
			if (error.response) {
				console.error('Response data:', error.response.data);
			}
		}
	},

	addRes: (data) =>
		set((state) => ({
			chats: state.chats.map((chat) =>
				chat.id === data.id
					? {
						...chat,
						chatRes: [...chat.chatRes, data.message],
					}
					: chat
			),
		})),
	addNewChat: (newChat) =>
		set((state) => ({
			chats: [{ id: 0, chatReq: [], chatRes: [] }, ...state.chats.slice(1), newChat]
		})),
}));

export default useStore;
