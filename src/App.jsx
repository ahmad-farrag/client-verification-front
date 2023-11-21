import './App.css';
import { LOCAL_STORAGE_PASS_KEY } from './constants';
import Password from './Pages/Password';
import { useLocalStorage } from '@uidotdev/usehooks';
import Home from './Pages/Home';

function App() {
	const [password, setPassword] = useLocalStorage(LOCAL_STORAGE_PASS_KEY, null);

	console.log('p', password);
	return <>{!password ? <Password /> : <Home />}</>;
}

export default App;
