import { useEffect, useState } from 'react';
import './App.css';

function App() {
	// useEffect(() => {
	// 	fetch('http://0.0.0.0:80/')
	// 	.then(response => response.json)
	// 	.then(initialMessage => )
	// });

	const [isHidden, setIsHidden] = useState<boolean>(true);

	return (
		<div className='chatbot'>
			{isHidden ? (
				<div className='chatbot-header-hidden'>
					<img 
						src='favicon.ico'
						alt='keelbot_ico'
					/>
					<p>Have Questions?</p>
					<button onClick={() => setIsHidden(!isHidden)}>
						ᐱ
					</button>
				</div>
			) : (
				<div className='chatbot-container'>
					<div className='chatbot-header'>

					</div>
				</div>
			)}
		</div>
		// <div className='chatbot-container'>
		// 	<div className='chatbot-header'>
		// 		<img 
		// 			src='favicon.ico'
		// 			alt='keelbot_ico'
		// ᐯ
		// 		/>
		// 		{isHidden ? (<p>Have Questions?</p>) : (<p>Chat with KeelBot</p>)}
		// 		<button onClick={() => setIsHidden(!isHidden)}>
		// 			{isHidden ? 'ᐱ' : 'ᐯ'}
		// 		</button>
		// 	</div>

			

		// 	{/* {isHidden ? (
		// 		<div className='chatbot-header'>
		// 			<p>Chat with me</p>
		// 		</div>
		// 	) : (
		// 		<div className='chatbot-large'>
		// 			<div className="chatbot-header">
		// 				<img 
		// 				src='favicon.ico'
		// 				alt='keelbot_ico'
		// 				width='50px'
		// 				height='50px'
		// 			/>
		// 			<p>Chat with KeelBot</p>
		// 				<p>You are chatting with: </p>
		// 				<h2>KeelBot</h2>
		// 				<p>We're online</p>
		// 			</div>
		// 			<div className="chatbot-messages">
		// 					<div className="chatbot-message">
		// 						<p>Ask me anything about the KeelWorks Foundation!</p>
		// 					</div>
		// 			</div>
		// 			<div className="chatbot-input">
		// 				<textarea
		// 				/>
		// 				<button>Send</button>
		// 			</div>
		// 		</div>
		// 	)} */}
		// </div>
	);
}

export default App;
