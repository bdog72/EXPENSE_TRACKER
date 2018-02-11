import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expense Tracker</h1>

        <div>
            <NavLink className="links" activeClassName="isActive" exact to="/">
                Home
            </NavLink>
            <NavLink className="links" activeClassName="isActive" to="/create">
                Add Expense
            </NavLink>
            <NavLink className="links" activeClassName="isActive" to="/edit">
                Edit Expense
            </NavLink>
            <NavLink className="links" activeClassName="isActive" to="/help">
                Help
            </NavLink>
        </div>
        <br />
    </header>
);
export default Header;
