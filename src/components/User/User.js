import React from 'react';

const User = ({user,showPost}) => {

    return (
        <div>
            Id:{user.id}-
            -Name:{user.name} -
            <button onClick={()=>{
                showPost(user.id)
            }}>Показать пост</button>
            <hr/>
            {

            }
        </div>
    );
};

export default User;