/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client'
const container = document.querySelector('#app')

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';

function App() {
    return (
        <Router>
            <main className='container'>
                <Routes>
                    <Route path="/add-prod" element={<AddProduct />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </main>
        </Router>
    )
}

const root = createRoot(container) // createRoot(container!)
root.render(<App />)