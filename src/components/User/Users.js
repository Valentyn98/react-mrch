import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/axios.services";
import User from "./User";
import Posts from "../PostofUs/Posts";

const Users = () => {
    const [users,setUsers] = useState([])

    const [status,setStatus] = useState(false)
    useEffect(()=>{
        getAllUsers().then(value => setUsers([...value]))
    },[])

    const showPost = (id) =>{
        setStatus(id)
        console.log(status)
    }
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} showPost={showPost} />)}
            {
                status && <Posts status={status} />
            }
        </div>
    );
};

export default Users;