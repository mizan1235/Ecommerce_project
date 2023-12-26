import React from 'react'
import { useRecoilState } from 'recoil';
import { useRef } from 'react';
import loginDetailsAtom from '../Recoil/loginDetailsAtom';
const AddressCard = () => {
    const [LogedInUser,setLogedInUser]=useRecoilState(loginDetailsAtom)

 
    const usernameRef= useRef(null);
    const userphoneRef= useRef(null);
    const pinRef = useRef(null);
    const localityRef = useRef(null);
    const addressRef=useRef(null);

    const Submit=(e)=>{
        e.preventDefault();
        
        const data = {
          name: usernameRef.current.value,
          email:LogedInUser?.email,
          phone: userphoneRef.current.value,
          pin: pinRef.current.value,
          locality:localityRef.current.value,
          add:addressRef.current.value
          
        };
        
        fetch('http://127.0.0.1:8000/Mizan/create_address', {
          method: "POST",
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          
        })
        .catch((error) => {
          // console.log(error);
        });
       }

  return (
    <div>
        <div className='login-card-container1'>
            <form onSubmit={Submit}>
            
            <input className='login-input1' type='text' placeholder='Name'
            ref={usernameRef}
            />
            
            <input className='login-input1' type='tel' placeholder='Enter your Mobile Number'
            required  ref={userphoneRef}
            />

            <input className='login-input1' type='number' placeholder='PIN'
             required  ref={pinRef}
            />
            <input className='login-input1' type='text' placeholder='Locality'
             ref={localityRef}
            />
            <input className='login-input1' type='textarea' placeholder='Address'
             ref={addressRef}
            />
            <br />
            {/* <button className='gps'><Gps/></button> */}
            <button className='login-btn' type='submit'>Continue</button>
            
            </form>
            
        </div>
    </div>
  )
}

export default AddressCard