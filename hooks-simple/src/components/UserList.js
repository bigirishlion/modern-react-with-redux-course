import React from 'react';
import useResources from './useResources';

const UserList = () => {
    const users = useResources('users');
    return <div>{users.map(record => <li key={record.id}>{record.name}</li>)}</div>
}

export default UserList;