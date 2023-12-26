import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {  useNavigate } from 'react-router-dom';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from 'react-router-dom';
import initialProductAtom from '../Recoil/initialProductAtom'
import searchInputAtom from '../Recoil/searchInputAtom';
import loginDetailsAtom from '../Recoil/loginDetailsAtom';
const ProductCard = () => {
    const [ApiData,SetApiData]=useRecoilState(initialProductAtom);
    const[searchInput,setSearchInput]=useRecoilState(searchInputAtom)
    const [LogedInUser,setLogedInUser]=useRecoilState(loginDetailsAtom)
    const history=useNavigate()
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              //console.log(json)
            SetApiData(json)
        //   console.log(LogedInUser?.email)
          })
            
  },[ ])
  return (
    <div className='product'>
        <div className='product-wrapper'>
        {ApiData?.filter((val)=>{
          
           if(searchInput===""){return val}
           else if(val?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())){return val}
          // else  return val;
        })?.map((data,index)=>{
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
                 <button className='addCard-btn'
                 onClick={()=>{
                  if(LogedInUser!==null){
                    const Card_data = {
                      email:LogedInUser?.email,
                      productId: data?.id,
                      title: data?.title,
                      desc:data?.description,
                      category:data?.category,
                      image:data?.image,
                      price:data?.price

                      
                    };
                    fetch('https://ecommercebackend-production-414f.up.railway.app/Mizan/create_card', {
                      method: "POST",
                      headers: {
                        'Content-Type': "application/json",
                      },
                      body: JSON.stringify(Card_data),
                    })
                    .then((response) => response.json())
                    .then((Data) => {
                      // console.log(Data);
                      alert("Added To Your Card Successfully")
                      history('/card')
                      
                    })
                    .catch((error) => {
                      // console.log(error);
                    });

                    
                    
                  }
                  
                  // console.log(data?.id)
                 }} > Add To card</button>
                 <br />
                 <button className='buy-btn'  >
                     {/* <Link to="/address">Buy Now</Link> */} buy
                 </button>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductCard