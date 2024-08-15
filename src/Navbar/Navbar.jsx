import React from 'react'
import {link} from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <link to="/about">About</link>
                </li>
                <li>
                    <link to="/contact">Contact</link>
                </li>
            </ul>
        </nav>
    );
};