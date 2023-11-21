import React, { useRef } from 'react';
import { login } from '../Services/password.service';
import { LOCAL_STORAGE_PASS_KEY } from '../constants';
import { useLocalStorage } from '@uidotdev/usehooks';

function Password() {
	const textRef = useRef(null);
	const [_, setPassword] = useLocalStorage(LOCAL_STORAGE_PASS_KEY, null);

	const handleLogin = () => {
		const value = textRef.current.value;
		console.log(value);
		login(value).then((res) => {
			if (!res) return alert('Wrong password');

			setPassword(value);
		});
	};

	return (
		<>
			<h1>Please sign in</h1>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: 200,
				}}
			>
				<input
					type="text"
					ref={textRef}
					placeholder="password"
					style={{ marginBottom: '10px' }}
				/>
				<button onClick={handleLogin}> Login</button>
			</div>
		</>
	);
}

export default Password;
