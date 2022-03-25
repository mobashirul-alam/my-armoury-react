import React from 'react';
import './ArmourCard.css'

const ArmourCard = ({ armour }) => {
    console.log(armour)
    const { img, name, bullet, capacity, action, price } = armour;
    return (
        <div className="cart">
            <img src={img} alt="" />
            <div className='armour-info'>
                <h2>Name : {name}</h2>
                <p><small>Bullet : {bullet}</small></p>
                <p><small>Capacity : {capacity}</small></p>
                <p><small>Action : {action}</small></p>
            </div>
            <div className='add-to-cart'>
                <h3>Price : $ {price}</h3>
                <button>Cart</button>
            </div>
        </div>
    );
};

export default ArmourCard;