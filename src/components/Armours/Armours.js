import React, { useEffect, useState } from 'react';
import ArmourCard from '../ArmourCard/ArmourCard';
import './Armours.css'

const Armours = () => {

    const [armours, setArmours] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setArmours(data))
    }, [])

    return (
        <div className='armour-container'>
            {
                armours.map((armour) => <ArmourCard
                    key={armour.id}
                    armour={armour}
                ></ArmourCard>)
            }
        </div>
    );
};

export default Armours;