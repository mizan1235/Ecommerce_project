import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom'
import loginDetailsAtom from '../Recoil/loginDetailsAtom'
import cardDataAtom from '../Recoil/cardDataAtom'



const ItemCard = () => {

    const [LogedInUser,setLogedInUser]=useRecoilState(loginDetailsAtom)
  const [cardData,setCardData]=useRecoilState(cardDataAtom)
  useEffect(()=>{
    // console.log(LogedInUser)
    fetch('https://ecommercebackend-production-414f.up.railway.app/Mizan/get_card', {
                      method: "POST",
                      headers: {
                        'Content-Type': "application/json",
                      },
                      body: JSON.stringify(LogedInUser),
                    })
                    .then((response) => response.json())
                    .then((Data) => {
                      // console.log(Data);
                      setCardData(Data)
                      
                    })
                    .catch((error) => {
                      // console.log(error);
                    });
            
  },[ ])

  

  return (
    <div>
        <div className='product-wrapper1 product-wrapper'>
        {cardData?.objects?.map((data,index)=>{
          return(
            <div key={data?.id} className='product-cart'>
              {/* {data?.id} */}
              {/* {data?.title} */}
              {<img className='image' src = {data?.image} alt={data?.title}/>}
           <div>
           <h3 className='product-name'>{data?.title}</h3>
             <div className='cat-price-wrapper'>
              <p className='product-category'>{data?.category}</p>
              <p className='product-price'>${data?.price}</p>
               
             </div>
           </div>
                <div className='buy'>
                 <button className='addCard-btn' onClick={()=>{
                  
                    const Card_data = {
                      
                      productId: data?.productId
                     

                      
                    };
                    fetch('https://ecommercebackend-production-414f.up.railway.app/Mizan/del_card', {
                      method: "DELETE",
                      headers: {
                        'Content-Type': "application/json",
                      },
                      body: JSON.stringify(Card_data),
                    })
                    .then((response) => response.json())
                    .then((Data) => {
                      // console.log(Data);
                      // console.log(Card_data)
                      alert("Removed from your card successfully")
                      
                    })
                    .catch((error) => {
                      // console.log(error);
                    });

                    
                 }}> Remove</button>
                 <br />
                 <button className='buy-btn'> Buy Now</button>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ItemCard