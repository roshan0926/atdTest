import React, { useState, useEffect } from 'react';
import './products.css'
import axios from 'axios';
import Loader from './Loader'
const Products = () => {
  const apiUrl1 = 'https://atd.atdtravel.com/api/products?geo=en&limit=20'
  const apiUrl2 = 'https://atd.atdtravel.com/api/products?geo=en&limit=200'
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    axios.get(apiUrl1).then((res) => {
      setProducts(res.data.data)
    })
      .catch(error => { console.log(error) })
  }, [apiUrl1])
  useEffect(() => {
    axios.get(apiUrl2).then((res) => {
      setProducts(res.data.data)
    })
      .catch(error => { console.log(error) })
  }, [apiUrl2])

  if (products) {

    return (
      <div>
        <header className="header">
          <h1>Product Search</h1>
          <div className="form">
            <span htmlFor='search'>Title:</span>
            <input className='search' onChange={(e) => { setSearchTerm(e.target.value.split(' ').join('')) }} type='text' id='search' placeholder='Search...'></input>
          </div>
        </header>
        <table className="table">
          <thead >
            <tr className="titles">
              <th>Image</th>
              <th>Title</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>
            {
              products.filter((val) => {
                if (searchTerm == "") {
                  return val
                } else if (val.title.toLowerCase().split(' ').join('').includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map((product) => {
                return (<tr className="table-items">
                  <td key={product.img_sml}><img src={product.img_sml}></img></td>
                  <td key={product.title}>{product.title}</td>
                  <td key={product.dest}>{product.dest}</td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    )

  } else {
    return (<div>
      <header className="header">
        <h1>Product Search</h1>
        <div className="form">
          <span htmlFor='search'>Title:</span>
          <input className='search' onChange={(e) => { setSearchTerm(e.target.value) }} type='text' id='search' placeholder='Search...'></input>
        </div>
      </header>
      <Loader />
      </div>
    )
  }

}

export default Products