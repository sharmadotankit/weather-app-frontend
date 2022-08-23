import React from 'react';
import './home.css';
import home from '../../assets/home.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    isSignedIn: state.loadUserOnSignIn.isSignedIn
  }
}



function Home(props) {

  const { isSignedIn } = props;

  return (
    <div>

      <div className='home-content'>
        <div className='left-content'>
          <h2 className='title'> Welcome to weather application</h2>
          <div className='left-text'>
            <br />
            <p>
              Real-time weather forecast application. Find the weather of any location with a click of a button.
            </p>
            <br />
            <p>
              How to use?
            </p>

            <p>
              It is very simple to use this application, you just have to enter the name of the city for which you want to find the weather details and click on the "Find Weather" button.
            </p>

            <br />

            {isSignedIn ?
              <Link className='register-link' to='/weather'>
                <button className='get-started-btn'>Get Started 	&rarr;</button>
              </Link>
              : <Link className='register-link' to='/signin'>
                <button className='get-started-btn'>Get Started 	&rarr;</button>
              </Link>
            }


          </div>


        </div>

        <div className='right-content'>
          <img alt='home' src={home} className='home-img' />
        </div>


      </div>


    </div>

  )
}


export default connect(mapStateToProps, null)(Home);