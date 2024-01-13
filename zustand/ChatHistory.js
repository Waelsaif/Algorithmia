import { create } from 'zustand'


const useChatHistory = create((set) => ({
	chatHistory : [
		// {
		// 	chatReq: ["What is Generative AI?"],
		// 	chatRes: ["Generative AI refers to artificial intelligence systems capable of creating new, original content, such as images, text, or music, often using techniques like neural networks and deep learning."],
		// 	id: 10001
		// },
		// {
		// 	chatReq: ["What is destructuring in java Script?"],
		// 	chatRes: ["Destructuring is a feature in JavaScript that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It provides a shorthand syntax to simplify the process of extracting values."],
		// 	id: 10000
		// },
	]
	,
}))
export default useChatHistory;