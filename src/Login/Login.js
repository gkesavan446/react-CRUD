import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function Login() {
    return (
        <section className="vh-100" style={{ backgroundColor: "#8379de" }}>
            <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="col col-xl-9">
                        <div className="card " style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/10/11114250/Notes.png"
                                        alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4  p-lg-5 text-black">

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                {/* <i className="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> */}
                                                <div className='fa-2x me-3' style={{ color: "#ff6219" }}>
                                                    <FontAwesomeIcon icon={faPen} />
                                                </div>
                                                <span className="h1 fw-bold mb-0 text-primary">ListMate</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3 text-primary" style={{ letterSpacing: "1px" }}>Sign into your account</h5>

                                            <div className="form-outline mb-4">
                                                <label>Username</label>
                                                <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='noneed@gmail.com' />

                                            </div>

                                            <div className="form-outline mb-4 ">
                                                <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='user123' />

                                            </div>

                                            <div className="pt-1 mb-4">
                                                <Link className="btn btn-primary btn-lg btn-block " to="/portal/userlist">Login</Link>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login
