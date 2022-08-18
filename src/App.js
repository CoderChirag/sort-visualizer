import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/root-navigation/navigation.component';
import SortingNavigation from './routes/sorting-navigation/navigation.component';
import NotFound from './components/organisms/404/not-found.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Navigation />} />
				<Route path='*' element={<NotFound />} />
			</Route>
			<Route path='/sorting/:algorithm' element={<SortingNavigation />} />
		</Routes>
	);
}

export default App;
