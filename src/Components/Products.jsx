import React, {useState, useEffect} from 'react'
import './Products.css'
import axios from 'axios'
import img1 from '../images/img.jpg'

const Products = () => {

    const [products, setProducts] = useState([])
    const getProducts =async () => {
        const res = await axios.get("https://gorest.co.in/public/v2/users")
        console.log(res)
        setProducts(res.data)
    }
    useEffect(() => {getProducts()}, [])



        let box = document.querySelector('.product-container')

        const btnpressprev = () => {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        }

        const btnpressnext = () => {
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width;
        }



  return (
    <div className='main-container'>
        <div className='product-carousel'>
          <button className='pre-btn' onClick={btnpressprev}>Left</button>
          

          <div className='product-container'>
              {
                products.map((item) => (
                    <div className='mycard' id={item.id} cardno={item.id}>
                        <img className='image-one' src={img1} />
                        <h3>Name: {item.name}</h3>
                        <p>Email: {item.email}</p>
                        <p>Gender: {item.gender}</p>
                        <p>Status: {item.status}</p>
                    </div>
                ))
              }
          </div>

          <button className='next-btn' onClick={btnpressnext}>Right</button>
    </div>
    </div>
  )
}

export default Products