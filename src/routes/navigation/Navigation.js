import React from 'react';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import WeatherLogo from '../../assets/logo.png';
import './navigation.css';
import { unloadUser } from '../../actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        isSignedIn: state.loadUserOnSignIn.isSignedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignOutBtnClick: (user) => dispatch(unloadUser())
    }
}


function Navigation(props) {
    const { isSignedIn, onSignOutBtnClick } = props;

    if (!isSignedIn) {
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
                    </div>
                </div>
                <Outlet />
            </Fragment>
        );
    }
    else {
        return (

            <Fragment>
                <div className='navigation'>
                    <Link className='logo-container' to='/'>
                        <img alt="" src={WeatherLogo} height='30px' />
                    </Link>
                    <div className='nav-links-container'>
                        <Link className='nav-link' to='/weather'>
                            Weather
                        </Link>
                        <Link className='nav-link' to='/profile'>
                            Profile
                        </Link>

                        <Link className='nav-link' to='/' onClick={onSignOutBtnClick}>
                            SignOut
                        </Link>
                    </div>
                </div>
                <Outlet />
            </Fragment>

        )
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);