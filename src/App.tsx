import Menu from './components/Menu'

import { categories } from './database/categories.json'

function App() {
	return (
		<div className='App' style={{ backgroundColor: '#fafafa', height: '100vh' }}>
			<Menu categories={categories}></Menu>
		</div>
	)
}

export default App
