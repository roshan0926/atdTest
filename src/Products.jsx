import React, { useState, useEffect } from 'react';
import './products.css'
import axios from 'axios';
const Products = () => {
  const apiUrl = 'https://global.atdtravel.com/api/products?geo=en'
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setProducts(res.data.data)
    })
      .catch(error => { console.log(error) })
  }, [searchTerm])

  if (products) {

    return (
      <div>
        <h1>Product Search</h1>
        <span htmlFor='search'>Title:</span>
        <input onChange={(e) => { setSearchTerm(e.target.value) }} type='text' id='search' placeholder='Search...'></input>
        <button>Search</button>
        <table>
          <thead>
            <tr>
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
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map((product) => {
                              return( <tr>
              <td key={product.img_sml}><img src={product.img_sml}></img></td>
              <td key={product.title}>{product.title}</td>
              <td key={product.dest}>{product.dest}</td>
            </tr>)
              })
              //   products.map((val, product) => {
              //     products.filter((val) => {
              //       console.log(val)
              //     if (searchTerm == "") {
              //       return val
              //     } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              //       return val
              //     }
              //   })
              //   return( <tr>
              //   <td key={product.img_sml}><img src={product.img_sml}></img></td>
              //   <td key={product.title}>{product.title}</td>
              //   <td key={product.dest}>{product.dest}</td>
              // </tr>)
              //   })
            }

          </tbody>
        </table>
      </div>
    )

  } else {
    return <div>no product</div>
  }

}

export default Products


// https://global.atdtravel.com/api/products?geo=en&title=disney