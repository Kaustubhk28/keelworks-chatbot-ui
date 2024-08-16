import { useEffect, useState } from 'react';
import './App.css';

interface Message {
	text: string;
	sender: 'user' | 'bot';
	isPlaceholder?: boolean;
}

function App() {
	const [isHidden, setIsHidden] = useState<boolean>(true);
	const [messages, setMessages] = useState<Message[]>([]);
	const [currentMessage, setCurrentMessage] = useState<string>('');

	// Fetch the initial message
	useEffect(() => {
		fetch('http://0.0.0.0:80/')
		.then(response => response.json())
		.then(data => setMessages([{ text: data.message, sender: 'bot' }]))
		.catch(error => {
			setMessages([{ text: 'Server is down right now', sender: 'bot' }]);
			console.error('Error fetching data:', error);
		});
	}, []);

	// Send a POST request to API
	function askChatbot() {
    if (currentMessage.trim()) {
			setMessages(prevMessages => [
				...prevMessages,
				{ text: currentMessage, sender: 'user' },
				{ text: '...', sender: 'bot', isPlaceholder: true }
			]);
      setCurrentMessage('');
      
			fetch('http://0.0.0.0:80/ask', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					query: currentMessage
				})
			})
			.then(response => response.json())
			.then(data => {
				setMessages(prevMessages => (
					prevMessages.map(message =>
							message.isPlaceholder ? { text: data.answer, sender: 'bot' } : message
					)
				));
			})
			.catch(error => {
				setMessages([...messages, { text: 'Server is down right now', sender: 'bot' }]);
				console.error('Error fetching data:', error);
			});
    }
	}

	return (
		<div className='chatbot'>
			{isHidden ? (
				<div className='chatbot-header-hidden'>
					<img 
						className='chatbot-icon'
						src='favicon.ico'
						alt='keelbot_ico'
					/>
					<div className='chatbot-header-msg'>
						<p>Have Questions?</p>
					</div>
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
						<div className='chatbot-header-msg'>
							<h2>KeelBot</h2>
						</div>
						<button 
							className='chatbot-toggle'
							onClick={() => setIsHidden(!isHidden)}
						>ᐯ</button>
					</div>
					<div className="chatbot-messages">
						{messages.map((message, index) => (
							<p key={index} className={message.sender}>
								{message.text}
							</p>
						))}
					</div>
					<div className="chatbot-input">
						<textarea
							value = {currentMessage}
							onChange={e => setCurrentMessage(e.target.value)}
						/>
						<button onClick={askChatbot}>➤</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
