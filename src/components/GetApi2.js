import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressBar from './reusable/ProgressBar';
import MyLi from './reusable/MyLi';

const GetApi2 = () => {
    let [products, setproducts] = useState([]);
    let [categorys, setCategories] = useState([]);
    let [productObj, setProductObj] = useState({"ProductId": 0,
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": 0,
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": new Date(),
    "DeliveryTimeSpan": "",
    "CategoryId": "",
    "ProductImageUrl": ""})

    const changeFormValues = ( event,key ) => {
        setProductObj(prevObj => ({...prevObj,[key]:event.target.value}))
    }

    useEffect(() => { 
        getProducts();
        getCategory(); 
    },[])

    const getProductUrl = "https://freeapi.miniprojectideas.com/api/amazon/GetAllProducts";
    const getCatrgoryUrl = "https://freeapi.miniprojectideas.com/api/amazon/GetAllCategory";
    const createNewProduct = "https://freeapi.miniprojectideas.com/api/amazon/CreateProduct";

 
    const getProducts = async () => {
        const result = await axios.get(getProductUrl);
        debugger;
        setproducts(result.data.data)
    }
    const getCategory = async () => {
        const response = await axios.get(getCatrgoryUrl);
        setCategories(response.data.data);
    }
    const saveNewProduct = async () => {
        const result = await axios.post(createNewProduct,productObj);
        if(result.data.result) {
            alert("Product Created");
            getProducts();
        } else {
            alert(result.data.message)
        }
    }
    let stateList = ['Maharashtra','punjab','Goa']

    return (
        <div >
            <div className='row'>
                <MyLi data={stateList}></MyLi>
                <div className='col-12 text-end'>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" >Add New Prodduct</button>
                </div>
               <ProgressBar progessValue={'10%'} progressClassName='bg-danger'/>
            </div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>


                        <div className="modal-body">
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Product Sku</label>
                                    <input type='text' onChange={(event)=>{changeFormValues(event,'ProductSku')}} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label>Product Name</label>
                                    <input type='text' onChange={(event)=>{changeFormValues(event,'ProductName')}} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Product Price</label>
                                    <input type='text' onChange={(event)=>{changeFormValues(event,'ProductPrice')}} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label>  Short Name</label>
                                    <input type='text' onChange={(event)=>{changeFormValues(event,'ProductShortName')}} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Product Description</label>
                                    <input type='text' onChange={(event)=>{changeFormValues(event,'ProductDescription')}} className='form-control' />
                                </div>
                                <div className='col-6'>
                                    <label>Delivery TimeSpan</label>
                                    <input type='text' onChange={(event)=>{changeFormValues(event,'DeliveryTimeSpan')}} className='form-control' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>Category Id</label>
                                    <select onChange={(event)=>{changeFormValues(event,'CategoryId')}}>
                                        <option>Select Category</option>
                                        {
                                            categorys.map((item) => {
                                                return (<option value={item.categoryId}> {item.categoryName}</option>)
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label>Product Image Url</label>
                                    <input type='text' onChange={(event)=>{changeFormValues(event,'ProductImageUrl')}} className='form-control' />
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={saveNewProduct}>Save product</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    products.map((item) => {
                        return (<div className='col-3 pt-2'>
                            <div className="card" >
                                <img className="card-img-top" src={item.productImageUrl} style={{ height: '100px' }} alt="Card image" />
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