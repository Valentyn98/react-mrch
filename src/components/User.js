import React from 'react';

const User = ({user,showDet}) => {
    return (
        <div>
           ID: {user.id} - Name: {user.name}
            <div><button onClick={()=>{
                showDet(user.id)
            }}>_ShowDetails_</button></div>

        </div>
    );
};

export default User;