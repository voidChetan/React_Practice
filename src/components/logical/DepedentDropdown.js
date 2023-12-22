import React, { useEffect, useState } from 'react';
import  axios  from 'axios'; 
import UserCard from '../reusable/UserCard';

const DepedentDropdown = () => {
    let [allLanguages,setAllLanguages] = useState([])
    let [allLanguageTopics,setallLanguageTopics] = useState([]) 
    let cityList = ['Pune', 'Nagput','Mumbai'];
    let[ playerFullName,setPlayerFullName] = useState('Sachin')
    useEffect(()=>{
        getAllLanguage()
    },[])

    const getAllLanguage = async() => {
            const result = await axios.get("https://freeapi.miniprojectideas.com/api/Interview/GetAllLanguage");
            setAllLanguages(result.data.data);
    } 

    const getTopicsByLanguage =  async (event) =>{
        console.log("api call")
        const result = await axios.get('https://freeapi.miniprojectideas.com/api/Interview/GetLanguageTopicById?id='+ event.target.value);
        setallLanguageTopics(result.data.data)
    }
    const chnagePlayerName =(event) => {
        setPlayerFullName(event.target.value)
    }
    
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <label>Select Langugage</label>
                    <select className='form-select' onChange={(event)=>{getTopicsByLanguage(event)}}>
                        <option value='Select Language'>Select Language</option>
                        {
                            allLanguages.map((item)=>{
                                return (<option value={item.languageId}> {item.language}</option>)
                            })
                        }
                    </select>
                </div>
                <div className='col-3'>
                    <label>Select Sub Topic</label>
                    <select className='form-select'>
                        <option value='Select topic'>'Select topic</option>
                        {
                            allLanguageTopics.map((item)=>{
                                return(<option value={item.languageTopicId}>{item.topicName}</option>)
                            })
                        }
                    </select>
                </div>
                 
            </div>
            <div className='row'>
                <div className='col-4'>
                    <UserCard playerName={playerFullName}></UserCard>
                </div>
                <div className='col-4'>
                    <input onChange={(event)=>{chnagePlayerName(event)}} />
                </div>
            </div>
           
        </div>
    );
};

export default DepedentDropdown;