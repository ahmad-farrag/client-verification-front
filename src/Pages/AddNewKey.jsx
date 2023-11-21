import React, { useRef } from 'react';
import { addKey } from '../Services/keys.service';

function AddNewKey() {
	const keyRef = useRef(null);
	const valRef = useRef(null);

	const handleAddKey = () => {
		addKey(keyRef.current.value, valRef.current.value);
	};
	return (
		<div>
			<h1>Add new Key</h1>
			<div>
				<span>key</span>
				<input ref={keyRef} type="text" placeholder="key" />
			</div>
			<div>
				<span>value</span>
				<input ref={valRef} type="text" placeholder="value" />
			</div>

			<div onClick={handleAddKey}>Add key</div>
		</div>
	);
}

export default AddNewKey;
