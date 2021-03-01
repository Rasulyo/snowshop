import React, {useState} from 'react';
import axios from "axios";
import {API_REGISTRATION} from "../../Adress";
import {useHistory} from 'react-router-dom';
import Content from '../Home/Content'
import Slide from 'react-reveal/Slide';

const Register = () => {

    let history = useHistory();

    let [user, setUser] = useState({});
    function handleInputs(e){
        let obj = {
            ...user,
            [e.target.name]: e.target.value,
            id: Date.now()
        };
        setUser(obj);
    }

    async function register(){
        let check = false;
        await axios.get(API_REGISTRATION).then(res => {
            res.data.forEach((p) => {
                if(p.account === user.account){
                    alert('User already exists!');
                    check = true;
                }
            })
        });
        if(!check){
            axios.post(API_REGISTRATION, user).then((res) => {
                history.push('/home')
            })
        }
    }

    return(
        <>
        
        <Content/>

        <div style={{
            background: "url(https://coresites-cdn-adm.imgix.net/whitelines_new/wp-content/uploads/2017/04/ValerianDucourtil_Mayrhofen_2Z7A2508_MattGEORGES-featured.jpg?fit=crop) ", 
            left: 0, top: 0, right: 0, bottom: 0 , minHeight: "600px", height: "100%"}}>
                <h3 style={{color: "white", marginTop: "45px"}}>Sign Up</h3>
                <Slide bottom> 
            <input onChange={handleInputs} type={'text'} name={'account'} placeholder="Login" style={{borderRadius: "10px", margin: '10px' }} /> <br />
            <input onChange={handleInputs} type={'text'} type="password" name={'password'}  placeholder="password"  style={{borderRadius: "10px",marginBottom: "10px" }}/><br /> 
                </Slide>
                <Slide left>
                    <button onClick={register} style={{borderRadius: "15px"}} >Sing Up</button>
                </Slide>

        </div>
        </>
    )
};

export default Register