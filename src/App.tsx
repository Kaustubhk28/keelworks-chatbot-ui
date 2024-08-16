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
						className='chatbot-icon'
						src='favicon.ico'
						alt='keelbot_ico'
					/>
					<p>Have Questions?</p>
					<button 
						className='chatbot-toggle'
						onClick={() => setIsHidden(!isHidden)}
					>ᐱ</button>
				</div>
			) : (
				<div className='chatbot-container'>
					<div className='chatbot-header'>
						<img 
							className='chatbot-icon'
							src='favicon.ico'
							alt='keelbot_ico'
						/>
						<p>You are chatting with: </p>
						<h2>KeelBot</h2>
						<p>We're online</p>
						<button 
							className='chatbot-toggle'
							onClick={() => setIsHidden(!isHidden)}
						>ᐯ</button>
					</div>
					<div className="chatbot-messages">
						<div className="chatbot-message">
							<p>Ask me anything about the KeelWorks Foundation!</p>
						</div>
					</div>
					<div className="chatbot-input">
						<textarea
						/>
						<button>Send</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
