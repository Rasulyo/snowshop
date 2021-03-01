import React, {useState, useEffect, useContext} from 'react';
import {Navbar, Nav, Button, Container, Modal, ModalTitle, ModalBody, Form} from 'react-bootstrap';
import {Link} from "react-router-dom";
import styled from "styled-components";
import ModalHeader from "react-bootstrap/ModalHeader";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {API_REGISTRATION} from "../../Adress";


const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: black;
    }
  ;
   b, .navbar{
     background-color: #61dafb;
   }
  }
`

const Header = () => {

    let history = useHistory();

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    let [curr, setCurr] = useState(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : 'asd');

    useEffect(() => {
        axios.get(API_REGISTRATION).then(res => {
            setUsers(res.data);
        })
    },[]);

    function handleInps(e){
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        };
        setUser(obj);
    }

    function login(){
        let check = false;
        let currentUser = {};
        users.forEach((p) => {
            if(p.account === user.account && p.password === user.password){
                check = true;
                currentUser = p;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        });
        if(check){
            history.push('/')
        } else {
            alert('No such user');
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <div style={{marginBottom: '60px'}} >
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link to="/"><img style={{maxHeight:'30px'}} src={'https://images.creativemarket.com/0.1.0/ps/6715521/1820/1214/m1/fpnw/wm0/mountain-logo-.jpg?1563738224&s=3897e57c7910893aea53fb4f380f3f73'} /></Link>
                        </Nav>

                        <Nav className="mx-auto">
                            <Nav.Link><Link to="/">SKI</Link></Nav.Link>
                            <Nav.Link><Link to="/">SNOWBOARD</Link></Nav.Link>
                            <Nav.Link><Link to="/">COMPANY</Link></Nav.Link>

                        </Nav>

                        <Nav>
                            <button className={'btn btn-primary mr-2'} onClick={() => history.push('/favourite')} >Favourite</button>
                            <button className={'btn btn-primary mr-2'} onClick={() => history.push('/cart')} >Cart</button>
                            <Nav.Link><Link to="/list">SHOP</Link></Nav.Link>
                            {
                                curr.account ? (
                                    <Nav.Link onClick={() => localStorage.clear()}><Link onClick={() => window.location.reload()}>LOGOUT: {curr.account.toUpperCase()}</Link></Nav.Link>
                                    ) :
                                    <Nav.Link><Link onClick={handleShow}>ACCOUNT</Link></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>

            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle>Log in</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form>

                        <Form.Group controlId='fromBasicEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onChange={handleInps} type='email' name={'account'} placeholder='Enter email'/>
[Photo]
<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleInps} name={'password'} type='password' placeholder='Enter password'/>
                        </Form.Group>
                        <button onClick={login} >Login</button>
                        <button onClick={()=> history.push('register')} >Register</button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Header;
