import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form> */}
                <div className="d-flex align-items-center mb-0 pb-1">
                    {/* <i className="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> */}
                    <div className='fa-1x me-3' style={{ color: "#ff6219" }}>
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                    <span className="h4 fw-bold mb-0 text-primary">ListMate</span>
                </div>
                <div>
                    <span className="mr-2 d-none d-lg-inline text-primay-600 small">Hello, Kesavan</span>
                    <img className="img-profile rounded-circle" style={{ width: 30, marginLeft: "10px" }}
                        src="https://cdn.vectorstock.com/i/preview-1x/66/77/avatar-young-bearded-guy-brow-haired-man-vector-32416677.jpg" alt='avatar' />

                    <Link className="btn btn-outline-danger btn-sm" to="/">Logout</Link>
                </div>

            </div>
        </nav>

    )
}

export default Navbar