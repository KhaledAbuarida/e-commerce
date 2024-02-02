import AppHeader from './components/AppHeader'
import { ProductList } from './components/ProductList'
import { CartList } from './components/CartList';
import { CartContextProvider } from './contexts/Cart.context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddProduct } from './components/AddProduct';
import { IProduct, productsList } from './utils/AppData';
import { useState } from 'react';

function App() {

	// States
	const [products, setProducts] = useState<IProduct[]>(productsList);

	return (
		<BrowserRouter>
			<CartContextProvider>
				<AppHeader/>
				<Routes>
					<Route index element={<ProductList productsList={products}/>}/>
					<Route path='/cart' element={<CartList />}/>
					<Route path='/add' element={<AddProduct products={products} setProducts={setProducts} />}/>
				</Routes>
			</CartContextProvider>  
		</BrowserRouter>
	)
}

export default App
