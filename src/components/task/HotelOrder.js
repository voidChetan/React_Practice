import React, { useState } from 'react';

const HotelOrder = () => {
    const foodItems = [
        {itemId:1, itemName: 'Tea', price: 10},
        {itemId:2, itemName: 'Coffee', price: 15},
        {itemId:3, itemName: 'Sandwich', price: 30},
        {itemId:4, itemName: 'Samosa', price: 20},
        {itemId:5, itemName: 'Misal', price: 40}
    ];
    let [itemObj, setItemObj] = useState({itemId:0,itemName: '', price:'', quantity:''}); //to store selected itejm n quantity

    let [selectedItems, setSelectedItems] = useState([]); // selectde food items store
    let [totalBill, setTotalBill] = useState(0) //total bill amount

    const changeObj = (event, key) => {
        setItemObj(prevObj =>  ({...prevObj, [key]:event.target.value }));
    }
    const addItem = () => {
        const data = itemObj;
        debugger;
        const itemData = foodItems.find(m => m.itemId == itemObj.itemId);

        const localObj = {
            itemId:itemObj.itemId,
            itemName: itemData.itemName, 
            price:itemData.price,
            quantity:itemObj.quantity
        } 
        debugger; 
        setSelectedItems(prevArray => [...prevArray,localObj]); 

        setItemObj(prevObj => ({...prevObj,itemId:0,itemName: '', price:'', quantity:''}))
       
    }
    const calculateBill = () => {
        debugger;
        let billAmt = totalBill;
        for (let index = 0; index < selectedItems.length; index++) {
            billAmt = billAmt + selectedItems[index].quantity * selectedItems[index].price;
        }
        setTotalBill(billAmt)
    }
    const clearAll =() => {
        setTotalBill(0)
        setSelectedItems([])
    }

    return (
        <div>
            <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-3'>
                            <label>Select Item</label>
                            <select className='form-select' value={itemObj.itemId} onChange={(event)=>{changeObj(event,'itemId')}}>
                                <option value=''>Select Food Item</option>
                                {
                                    foodItems.map( (item) => {
                                        return (<option value={item.itemId}> {item.itemName} - {item.price}</option>) 
                                    })
                                }
                            </select>
                        </div>
                        <div className='col-3'>
                        <label>Enter Quantity</label>
                                <input type='text' value={itemObj.quantity}  onChange={(event)=>{changeObj(event,'quantity')}} className='form-control' />
                        </div>
                        <div className='col-3'>
                                <button className='btn btn-sm btn-primary mt-4' onClick={addItem}>Add</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-10'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr </th> 
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        selectedItems.map((item, index) => {
                                            return (<tr>
                                                <td>{index+1}</td>
                                                <td>{item.itemName}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='col-2'>
                            <h1>Total Bill : {totalBill}</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-center'>
                            <button className='btn btn-danger' onClick={clearAll}>Clear</button>
                        </div>
                        <div className='col-6 text-center'>
                            <button className='btn btn-success' onClick={calculateBill}>Calculate Bill</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HotelOrder;
