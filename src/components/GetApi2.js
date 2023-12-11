import React, { useState } from 'react';
import axios from 'axios'; 

const GetApi2 = () => { 
    let [products, setproducts] = useState([]);
    let [categorys,setCategories ] = useState ([]); 
    const getProductUrl = "https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts";
    const getCatrgoryUrl = "https://freeapi.miniprojectideas.com/api/amazon/GetAllCategory"
    
    const getProducts = async () => {
        const result = await axios.get(getProductUrl);
        debugger;
        setproducts(result.data.data)
    } 
    const getCategory = async () => {
        const response = await axios.get(getCatrgoryUrl);
        setCategories(response.data.data);
    }

    return (
        <div >
            <div className='row'>
                <div className='col-4'>
                    <button className='btn btn-primary' onClick={getProducts}>Load Product</button>
                </div>
                <div className='col-4'>
                    <button className='btn btn-primary' onClick={getCategory}>Load Categories</button>
                </div>
                <div className='col-4'>
                     <select>
                        <option>Select Category</option>
                        {
                            categorys.map( (item) => {
                                return (<option value={item.categoryId}> {item.categoryName}</option>)
                            })
                        }
                     </select>
                </div> 
            </div> 
            <div className='row'>
                {
                    products.map((item) => {
                        return (<div className='col-3 pt-2'>
                            <div className="card" >
                                <img className="card-img-top" src={item.productImageUrl} style={{height:'100px'}} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">{item.productShortName}</h4>
                                    <p className="card-text">Some example text.</p>
                                    <a href="#" className="btn btn-primary">{item.productPrice}</a>
                                </div>
                            </div>
                        </div>)
                    })
                }



            </div>
        </div>
    );
};

export default GetApi2;