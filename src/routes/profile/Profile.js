import './profile.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.loadUserOnSignIn.loggedInUser,
        isSignedIn: state.loadUserOnSignIn.isSignedIn
    }
}

function Profile(props) {
    const { loggedInUser, isSignedIn } = props;
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
            navigate("/signin");
        }
    }, [isSignedIn, navigate])

    return (
        <div className="container">
            <div className="title">Profile</div>
            <div className="profile-container">
                <div className='profileImgDiv'>
                    <img  id='profile-pic'src={`https://robohash.org/${loggedInUser.name}/100*200`} alt="profileImage" />
                </div>
                <div className='userInfoDiv'>
                    <span>
                        <p>Username:</p>
                        <h2>{loggedInUser.name}</h2>
                    </span>
                    <span>
                        <p>Email:</p>
                        <h2>{loggedInUser.email}</h2>
                    </span>
                    <span>
                        <p>Count:</p>
                        <h2>{loggedInUser.count}</h2>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, null)(Profile);