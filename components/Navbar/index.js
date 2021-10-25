import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'

const index = () => {
  const { user } = useUser();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h3>Flowyhire</h3>
                    {/* <a class="navbar-brand logo" href="#"></a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-md-auto gap-2">
                            {/* only show login if there is no user */}
                            {!user && (
                                <>
                                    <li className="nav-item rounded">
                                        <a className="nav-link active" aria-current="page" href="/"><i className="bi bi-house-fill me-2"></i>Home</a>
                                    </li>
                                    <li className="nav-item rounded">
                                        <a className="nav-link active" aria-current="page" href="/pricing"><i className="bi bi-house-fill me-2"></i>Pricing</a>
                                    </li>
                                    <li className="nav-item rounded">
                                        <a className="btn btn-outline-secondary" href="/api/auth/login"><i className="bi bi-telephone-fill me-2"></i>login</a>
                                    </li>
                                </>
                            )}
                            {/* if there is user, show the user info and logout btn */}
                            {user && (
                                <>
                                    <img src={user.picture} className="rounded-circle" width="50" height="50" />
                                    <p>{user.name}</p>
                                    <li className="nav-item rounded">
                                        <a className="btn btn-outline-danger" href="/api/auth/logout"><i className="bi bi-telephone-fill me-2"></i>logout</a>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default index
