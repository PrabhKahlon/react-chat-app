import {React, useEffect, useState} from 'react'

export default function UserList(props) {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        props.socket.on("userList", (data) => {
            setUsers(data);
            console.log(data);
        });
    }, []);
    
    if(users && users.length > 0) {
        console.log(users);
        return(
            <ul>
                {users.map((user, i) => {
                    return( <li key={user.id}>{user.name}</li>);
                })}
            </ul>
        );
    } else {
        return(
            <p>no users</p>
        );
    }
}
