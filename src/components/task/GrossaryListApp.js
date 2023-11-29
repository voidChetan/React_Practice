import React, { useState } from 'react';

const GrossaryListApp = () => {
    const itemList = [
        { itemName: 'Oil', price: 250 },
        { itemName: 'Dal', price: 150 },
        { itemName: 'Hail Oil', price: 110 },
        { itemName: 'Tea', price: 50 },
        { itemName: 'Coffee', price: 70 },
        { itemName: 'Turmeric', price: 200 },
        { itemName: 'Dry Fruits Mix', price: 500 }
    ];
    let [selectItem, setSelectedItem] = useState({ itemName: '', price: '', quantity: '' });
    let [cartItems, setCartItmes] =  useState([])

    const changeSelectedItem = (event, key) => {   
        setSelectedItem(prevObj => ({ ...prevObj, [key]: event.target.value })) 
    }

    const changeCartItems = () => { 
        setCartItmes(prevArray =>  [...prevArray, selectItem])
    }
    return (
        <div className='row'> 
            <div className='col-5'>
                <div className="row">
                    <div className="col-8 col-sm-8 col-md-8">
                        <div className="row">
                            <div className="col-5 col-md-5 col-sm-5 col-lg-5">
                                <select id="dpdlItem" className="form-control" onChange={(event) => { changeSelectedItem(event, 'itemName') }}>
                                    <option value=""> Select Item </option>
                                    {
                                        itemList.map((item) => {
                                            return <option value={item.itemName}> {item.itemName} - {item.price}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-5 col-md-5 col-sm-5 col-lg-5">
                                <input type="text" id="txtQuantity" onChange={(event) => { changeSelectedItem(event, 'quantity') }} className="form-control" placeholder="Enter Quantity" />
                            </div>
                            <div className="col-2  col-md-2 col-sm-2 col-lg-2">
                                <button className="btn btn-sm btn-success" id="btnAdd" onClick={changeCartItems}>Add </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <table class="table table-bordered" id="tableItems">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, index)=> {
                                        return  <tr>
                                            <td>{index+1}</td>
                                            <td>{item.itemName}   </td> 
                                            <td>  {item.quantity} * {item.price} </td> 
                                        </tr>
                                    })
                                }
                             
                                </tbody>
                            <tfoot>
                                <tr>
                                    <td class="text-end"  >Total</td>
                                    <td class="text-end">
                                        <strong id="tot">640</strong>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className='col-3'>
            {selectItem.itemName} - {selectItem.quantity}
            </div>

        </div>
    );
};

export default GrossaryListApp;
