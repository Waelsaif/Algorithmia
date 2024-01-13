import axios from "axios"
import useStore from "../zustand/store"

const sendReq = (message) => {
	const {addRes} = useStore()
	const openaiApiKey = process.env.OPENAI_API_KEY
	const requestData = {
		model: 'gpt-3.5-turbo',
		messages: [
			{ role: 'system', content: 'only answer questions that about tech and programming, anything else is not allowed!, your answers must not be more than 120 words' },
			{ role: 'user', content: `${message}` },
		],
		temperature: 0.7
	};
	axios.post('https://api.openai.com/v1/chat/completions', requestData, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${openaiApiKey}`
		}
	})
		.then(response => {
			addRes({ id: 0, message: response.data.choices[0].message.content });
		})
		.catch(error => {
			console.error('Error making API request:', error.message);
			if (error.response) {
				console.error('Response data:', error.response.data);
			}
		});
}
export default sendReq;