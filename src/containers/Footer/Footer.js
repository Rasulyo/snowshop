import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBIcon, MDBBtn } from 'mdbreact';



const FooterPagePro = () => {
    return (
        <Container fluid style={{ backgroundColor: '#000', color: '#fff', }}>
        <MDBFooter className="page-footer font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{justifyContent: "space-between"}}>
                    <MDBCol md="6">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                           Snow Shop
                        </h5>
                        <p>
                            Best skies and snowboards from beginners to experts
                        </p>
                    </MDBCol>
                    <hr className="clearfix w-100 d-md-none" />
                    <MDBCol md="2" >
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                            Links
                        </h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Company</a>
                            </li>
                            <li>
                                <a href="#!">Skis Snowboards</a>
                            </li>
                            <li>
                                <a href="#!">Jalal-Abad</a>
                            </li>
                            <li>
                                <a href="#!">+996550157055</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <hr />
            <div className="text-center">
                <ul className="list-unstyled list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Register for free</h5>
                    </li>
                    <li className="list-inline-item">
                        <Link to ='/register'>
                        <a href="#!" className="btn btn-danger btn-rounded">
                            Sign up!
                        </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-gplus mx-1">
                            <i className="fab fa-google-plus"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-sm btn-dribbble mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>
                
            </div>
            <div className="footer-copyright text-center">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> ARVB </a>
                </MDBContainer>
            </div>
        </MDBFooter>
        </Container>
    );
}

export default FooterPagePro;