import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
//import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	//const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
			/*
			if (type === 'VKWebAppGetPhoneNumber') {
				const schemeAttributee = document.createAttribute('scheme');
				schemeAttributee.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttributee);
			}
			if (type === 'VKWebAppGetPhoneNumber') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}*/
			
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			//const userr = await connect.sendPromise('VKWebAppGetPhoneNumber');
			setUser(user);
			//setPopout(null);
		}
		fetchData();
	}, []);
    
	 
	 
	 
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	/*return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);*/
	
	return (
		<View activePanel={activePanel} >
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;

