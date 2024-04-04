import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';


const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <p>{user.userEmail}</p>
        </div>
    );
};

export default Profile;