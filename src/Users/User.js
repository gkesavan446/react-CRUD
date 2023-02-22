import React from 'react'

import { Link } from 'react-router-dom';

function User({ data, DeleteUser }) {


    return (
        <>
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
                <td>{data.salary}</td>
                <td><Link className='btn btn-success btn-sm me-1' to={`/portal/userview/${data.id}`} >👁‍🗨</Link>
                    <Link className='btn btn-info btn-sm me-1' to={`/portal/edituser/${data.id}`}>✍</Link>
                    <button className='btn btn-danger btn-sm me-1' onClick={() => DeleteUser(data.id)}>❌</button>
                </td>
            </tr>
        </>
    )
}

export default User
