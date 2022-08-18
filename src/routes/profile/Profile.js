import './profile.css';

function Profile() {
    const user = {
        userName: 'Ankit',
        userEmail: 'ankit@gmail.com',
        count: 2
    }

    return (
        <div className="container">
            <div className="title">Profile</div>
            <div className="profile-container">
                <div className='profileImgDiv'>
                    <img src={`https://robohash.org/${user.userName}/100*200`} alt="profileImage" />
                </div>
                <div className='userInfoDiv'>
                    <span>
                        <p>Username:</p>
                        <h2>{user.userName}</h2>
                    </span>
                    <span>
                        <p>Email:</p>
                        <h2>{user.userEmail}</h2>
                    </span>
                    <span>
                        <p>Count:</p>
                        <h2>{user.count}</h2>
                    </span>



                </div>



            </div>


        </div>

    )
}



export default Profile;