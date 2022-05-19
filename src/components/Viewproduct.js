import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewproduct = () => {
    var [productlist,setProductlist]=useState([])
    axios.get("https://fakestoreapi.com/products").then(
      (response)=>{
        console.log(response.data)
        setProductlist(response.data)
      }
    )
  return (
    <div>
        <Header/>
        <div className='container'>
            <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <div className='row g-3'>
                    {productlist.map((value,key)=>{
                        return <div className='col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div className="card">
  <img style={{width:250,height:250}} src={value.image} class="card-img-top" alt="..."/>
  <div className="card-body">
      <h1 className="card-id">{value.id}</h1>
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">Price:{value.price}</p>
    <p className="card-text">Descrpition:{value.description}</p>
    <p className="card-text">Category:{value.category}</p>
    <p className="card-text">Rating:{value.rating.rate}</p>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
                        </div>

                    })}
                </div>

                
</div>
            </div>

        </div>
    </div>
  )
}

export default Viewproduct