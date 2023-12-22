import React,{memo} from 'react';

const UserCard = (props) => {

    console.log('User Card Compoenent rendering')
    
    return (
        <div>
            <div className="card"  >
                <img className="card-img-top" style={{height:'70px'}} src="https://mmqatar.com/wp-content/uploads/2020/02/sachin-header.jpg" alt="Card image"/>
                    <div className="card-body">
                        <h4 className="card-title">{props.playerName}</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
            </div>
        </div>
    );
};

export default memo(UserCard);