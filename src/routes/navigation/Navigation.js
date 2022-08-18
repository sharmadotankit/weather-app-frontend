import React from 'react';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import WeatherLogo from '../../assets/logo.png';
import './navigation.css';

export default function Navigation() {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img alt="" src={WeatherLogo} height='30px' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/signin'>
                        Signin
                    </Link>

                    <Link className='nav-link' to='/register'>
                        Register
                    </Link>

                    <Link className='nav-link' to='/profile'>
                        Profile
                    </Link>

                    <Link className='nav-link' to='/'>
                        SignOut
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>

    )
}
