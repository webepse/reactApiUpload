import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = (props) => {
    return ( 
        <div>
            <h1>Hello World</h1>
            <NavLink className="btn btn-success" to="/add-prod">Ajouter un produit</NavLink>
        </div>
     );
}
 
export default HomePage;