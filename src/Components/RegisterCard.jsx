import React from 'react'
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import registerAtom from '../Recoil/registerAtom'
import { useNavigate } from 'react-router-dom';
const RegisterCard = () => {

  const [RegUserInfo,setRegUserInfo]=useRecoilState(registerAtom)
  const history=useNavigate()
  const usernameRef= useRef(null);
  const useremailRef= useRef(null);
  const userphoneRef= useRef(null);
  const passwordRef = useRef(null);

   const onSubmit=(e)=>{
    e.preventDefault();
    
    const data = {
      name: usernameRef.current.value,
      email: useremailRef.current.value,
      phone: userphoneRef.current.value,
      password: passwordRef.current.value
      
    };
    
    fetch('https://ecommercebackend-production-414f.up.railway.app/Mizan/create_user', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      alert(data?.message)
      setRegUserInfo(true)
      history('/login')
    })
    .catch((error) => {
      // console.log(error);
    });
   }

  return (
    <div>
        <div className='login-card-container'>
            <form onSubmit={onSubmit}
            >
            
            <input className='login-input' type='text' placeholder='Enter your Name'
            ref={usernameRef}
            />
            <input className='login-input' type='email' placeholder='Enter your Email'
            ref={useremailRef}
            />
            <input className='login-input' type='tel' placeholder='Enter your Mobile Number'
            ref={userphoneRef}
            />

            <input className='login-input' type='password' placeholder='password'
            ref={passwordRef}
            />
           
            <button className='login-btn' type='submit'>Sign Up</button>
            
            </form>
            
        </div>
    </div>
  )
}

export default RegisterCard