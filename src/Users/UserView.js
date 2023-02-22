import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function UserView({ data }) {

    const params = useParams();
    const Index = data.findIndex((item) => item.id == params.id);
    const details = data[Index];

    return (
        <div className="container py-5 h-100 ">
            <div className="row d-flex justify-content-center align-items-center h-100 ">
                <div className="col col-xl-9">
                    <h2 className='m-auto text-primary' style={{ textAlign: "center" }}>ListMate</h2>
                    <div className="card m-auto mt-3" style={{ width: "30rem" }}>
                        <div className="card-header text-center text-uppercase">
                            <strong>{details.name}</strong>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Description : {details.email}</li>
                            <li className="list-group-item">List No : {details.id}</li>
                            <li className="list-group-item">Priority : {details.role}</li>
                            <li className="list-group-item">Status : {details.salary}</li>
                        </ul>
                    </div>
                    <div className="d-sm-flex  justify-content-center mt-3" >
                        <Link to="/portal/userlist" className="btn btn-sm btn-primary shadow-sm ">BACK</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserView
