import {React, useEffect, useState} from 'react'

//UserList component
//Keeps track of connected users. 
//Was used for debugging socket connection and is not rendered.
//May render in the future.
export default function UserList(props) {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        props.socket.on("userList", (data) => {
            setUsers(data);
        });
        return () => {
            props.socket.off("userList");
        }
    }, [props.socket]);
    
    if(users && users.length > 0) {
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
