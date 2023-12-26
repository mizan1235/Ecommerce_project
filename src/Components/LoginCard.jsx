import React from 'react'
import { useRecoilState } from 'recoil'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import userInfoAtom from '../Recoil/userInfoAtom'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
import { useNavigate } from 'react-router-dom'
const LoginCard = () => {
    const [userInfo,setUserInfo]=useRecoilState(userInfoAtom)
    const [LogedInUser,setLogedInUser]=useRecoilState(loginDetailsAtom)

    const history =useNavigate()


    const emailRef=useRef(null)
    const passwordRef=useRef(null)
    
    const onSubmit=(e)=>{
        e.preventDefault()
        // console.log(emailRef?.current?.value)
        // console.log(passwordRef?.current?.value)
        const userCredetial={
          email:emailRef?.current?.value,
          password:passwordRef?.current?.value
        }
        fetch('https://ecommercebackend-production-414f.up.railway.app/Mizan/login',
        {
          method:"POST",
          headers:{
            'Content-Type':"application/json",
          },
          body:JSON.stringify(userCredetial),
        }
        ).then((Response)=>Response.json())
        .then((data)=>{
          // console.log(data)
          // console.log("hello")
          // if(data?.status==="successfull loged in"){
          //  localStorage.setItem('userStatus',true)
          //  setUserInfo(true)
          // }
          // else{
          //   localStorage.setItem('userStatus',false)
          // }
          setUserInfo(true)
           setLogedInUser(userCredetial)
           history('/')
        }).catch((error)=>{
          // console.log(error)
        })
      }
    
  return (
    <div>
        <div className='login-card-container'>
            <form onSubmit={onSubmit}
            >
            
            <input className='login-input' type='email' placeholder='Enter your Email'
           ref={emailRef}
            />
            
            <input className='login-input' type='password' placeholder='password'
            ref={passwordRef}
            />
           
            <button className='login-btn' type='submit'>Log In</button>
            <div className='signUp' ><Link to="/register">Create New Account</Link> </div>
            
            </form>
            

      
        </div>
       
    </div>
  )
}

export default LoginCard