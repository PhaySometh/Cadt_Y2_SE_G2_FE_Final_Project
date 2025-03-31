import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// pages
import { Home } from './pages/Home';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
//component
import { Layout } from './components/layout/layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;