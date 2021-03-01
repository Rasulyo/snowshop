import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_REGISTRATION } from "../../Adress";
import Slide from 'react-reveal/Slide';
import Content from '../Home/Content'
import Flip from 'react-reveal/Flip';

const Login = () => {
    let history = useHistory();

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});

    useEffect(() => {
        axios.get(API_REGISTRATION).then(res => {
            setUsers(res.data);
        })
    }, []);

    function handleInps(e) {
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        };
        setUser(obj);
    }

    function login() {
        let check = false;
        let currentUser = {};
        users.forEach((p) => {
            if (p.account === user.account && p.password === user.password) {
                check = true;
                currentUser.account = p.account;
                currentUser.password = p.password;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        }); 
        console.log(localStorage.getItem('currentUser'));
        check ? history.push('/') : alert('No such user');
        localStorage.setItem('admin', JSON.parse(currentUser));
    }

    return (
        <>
            <Content />
            <div>
                <Slide left>
                    <div style={{
                        background: "url(https://checkyeti.imgix.net/images/optimized/freeriding-snowboard-private---all-levels-board-at-hero.jpg)",

                        left: 0, top: 0, right: 0, bottom: 0, minHeight: "600px", height: "100%"
                    }}>

                        <Flip left> 
                            <input placeholder="Login" onChange={handleInps} type={'text'} name={'account'}  style={{color: "black", margin: "5px",borderRadius: 
                            "10px", border: "outlined"}} />
                            <input placeholder="Password" onChange={handleInps} type={'text'} name={'password'} style={{color: "black", margin: "5px",borderRadius: 
                            "10px", border: "outlined"}} />
                        </Flip>

                        <Flip right>
                            <button onClick={login} >Login</button>
                        </Flip>
                    </div>

                </Slide>
            </div>
        </>
    );
};

export default Login