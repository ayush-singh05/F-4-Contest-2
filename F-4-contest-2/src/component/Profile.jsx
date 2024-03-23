import React, { useEffect, useState } from 'react';

function Profile() {
    const [userData, setUserData] = useState('');
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);

    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {userId}</p>
            <p>Token: {token}</p>
            {userData && (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    {/* Add more user data fields as needed */}
                </div>
            )}
        </div>
    );
}

export default Profile;

