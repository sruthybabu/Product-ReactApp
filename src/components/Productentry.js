import React, { useState } from 'react'
import Header from './Header'

const Productentry = () => {
    var [name,setName]=useState("")
    var [price,setPrice]=useState("")
    var [description,setDescription]=useState("")

    const subData=()=>{
        const data={"name":name,"price":price,"description":description}
console.log(data)
    }

  return (
    <div>
<Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Product Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Product Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter Price" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <textarea onChange={(e)=>{setDescription(e.target.value)}} placeholder='Enter Description' name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Productentry