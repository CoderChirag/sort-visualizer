import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/root-navigation/navigation.component';
import SortingNavigation from './routes/sorting-navigation/navigation.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />} />
			<Route path='/sorting/:algorithm' element={<SortingNavigation />} />
		</Routes>
	);
}

export default App;
