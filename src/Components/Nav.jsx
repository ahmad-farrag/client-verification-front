import { useLocalStorage } from '@uidotdev/usehooks';
import React from 'react';
import { LOCAL_STORAGE_PASS_KEY } from '../constants';

const container = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
};

const buttonStyle = (isOn) => ({
	margin: '0px 10px',
	padding: 10,
	cursor: 'pointer',
	color: isOn ? '#646cff' : 'white',
});
function Nav({ page, setPage }) {
	const [_, setPassword] = useLocalStorage(LOCAL_STORAGE_PASS_KEY, null);
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				minWidth: '100vw',
				left: 0,
				padding: '2vh',
				borderBottom: '1px solid #646cff',
				filter: 'drop-shadow(3px 3px 5px #4444dd)',
			}}
		>
			<div style={container}>
				<div style={buttonStyle(page === 'add')} onClick={() => setPage('add')}>
					Add new key
				</div>
				<div
					style={buttonStyle(page === 'list')}
					onClick={() => setPage('list')}
				>
					View all Keys
				</div>

				<div
					style={{
						padding: 10,
						cursor: 'pointer',
						position: 'absolute',
						right: '5vw',
					}}
					onClick={() => {
						setPassword(null);
					}}
				>
					Logout
				</div>
			</div>
		</div>
	);
}

export default Nav;
