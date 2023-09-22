import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <NavLink
                    to='/'
                    className={({ isActive, isPending }) =>
                      isActive
                        ? 'text-green-500'
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;