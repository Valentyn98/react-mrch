import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {

    const [users, setUsers] = useState([])
    const [det, setDet] = useState({})
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])
    let showDet = (id) => {
            fetch(`https://jsonplaceholder.typicode.com/users/` + id)
                .then(value => value.json())
                .then(det => setDet(det))
        }

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} showDet={showDet} />)}
            <div>User: {det?.user} Name:{det?.name} Email:{det?.email}</div>
        </div>
    );
};

export default Users;