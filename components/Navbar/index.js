import React from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { NavContainer } from './NavbarElements';

const index = () => {
    const { user } = useUser();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top">
                <NavContainer className="container-fluid">
                    <h3>Flowyhire</h3>
                    {/* <a className="navbar-brand logo" href="#"></a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto pl-lg-4">
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
                                        <a className="nav-link active" aria-current="page" href="/global_hiring_guide"><i className="bi bi-house-fill me-2"></i>Global Hiring Guide</a>
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
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav mr-auto pl-lg-4">
                            <li className="nav-item rounded">
                                <a className="btn btn-outline-secondary" href="/api/auth/login"><i className="bi bi-telephone-fill me-2"></i>login</a>
                            </li>
                        </ul>
                    </div>
                </NavContainer>
            </nav>
        </>
    )
}

export default index

//     < nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top" >
//         <div className="container"> <a className="navbar-brand d-flex align-items-center" href="#">
//             <span className="ml-3 font-weight-bold">flowyhire</apan>
//         </a> <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar4">
//                 <span className="navbar-toggler-icon"></span>
//             </button>


//             <div className="collapse navbar-collapse" id="navbar4">
//                 <ul className="navbar-nav mr-auto pl-lg-4">
//                     <li className="nav-item px-lg-2 active"> <a className="nav-link" href="#"> <span className="d-inline-block d-lg-none icon-width"><i className="fas fa-home"></i></span>Home</a> </li>
//                     <li className="nav-item px-lg-2"> <a className="nav-link" href="#"><span className="d-inline-block d-lg-none icon-width"><i className="fas fa-spa"></i></span>Services</a> </li>
//                     <li className="nav-item px-lg-2"> <a className="nav-link" href="#"><span className="d-inline-block d-lg-none icon-width"><i className="far fa-user"></i></i></span>About</a> </li>

//                 <li className="nav-item px-lg-2 dropdown d-menu">
//                     <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="d-inline-block d-lg-none icon-width"><i className="far fa-caret-square-down"></i></span>Dropdown
//                         <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                             <polyline points="6 9 12 15 18 9"></polyline>
//                         </svg>
//                     </a>
//                     <div className="dropdown-menu shadow-sm sm-menu" aria-labelledby="dropdown01">
//                         <a className="dropdown-item" href="#">Action</a>
//                         <a className="dropdown-item" href="#">Another action</a>
//                         <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>

//                 <li className="nav-item px-lg-2"> <a className="nav-link" href="#"><span className="d-inline-block d-lg-none icon-width"><i className="far fa-envelope"></i></span>Contact</a> </li>
//             </ul>
//             <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
//                 <li className="nav-item"> <a className="nav-link" href="#">
//                     <i className="fab fa-twitter"></i><span className="d-lg-none ml-3">Twitter</span>
//                 </a> </li>
//                 <li className="nav-item"> <a className="nav-link" href="#">
//                     <i className="fab fa-facebook"></i><span className="d-lg-none ml-3">Facebook</span>
//                 </a> </li>
//                 <li className="nav-item"> <a className="nav-link" href="#">
//                     <i className="fab fa-instagram"></i><span className="d-lg-none ml-3">Instagram</span>
//                 </a> </li>
//                 <li className="nav-item"> <a className="nav-link" href="#">
//                     <i className="fab fa-linkedin"></i><span className="d-lg-none ml-3">Linkedin</span>
//                 </a> </li>
//             </ul>
//         </div>
// </div >
// </nav >
