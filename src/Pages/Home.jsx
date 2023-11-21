import React, { useState } from 'react';
import Nav from '../Components/Nav';
import ListKeys from './ListKeys';
import AddNewKey from './AddNewKey';
function Home() {
	const [page, setPage] = useState('list');
	return (
		<div style={{ minWidth: '100%' }}>
			<Nav page={page} setPage={setPage} />
			{page === 'list' && <ListKeys />}
			{page === 'add' && <AddNewKey />}
		</div>
	);
}

export default Home;
