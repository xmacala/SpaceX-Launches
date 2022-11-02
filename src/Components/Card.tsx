import React from 'react';
import './Card.css'
import {useNavigate} from 'react-router-dom'

function Card({ spacexData }) {

  let navigate = useNavigate();
  var date = spacexData.launch_date_local.split("T",1);
  var year_month_day = date[0].split("-");

  return (
    
    <div className= "card-container">
        <div className="mission_name-container">
            <h2>{spacexData.id}: {spacexData.mission_name}</h2>
        </div>
        <div className="date-container">
            <h3>Date: {year_month_day[2]}. {year_month_day[1]}. {year_month_day[0]}</h3>
        </div>
        <div className="rocket-container">
            <p>Rocket: {spacexData.rocket.rocket_name}</p>
        </div>
        <div className="site_name-container">
            <p>Site name: {spacexData.launch_site.site_name}</p>
        </div>
        <div className="button-container">
            <button 
              onClick={() => {
                navigate("/informations", {state: {spacexData}})
            }}>View more</button>
        </div>
    </div>
  );
}

export default Card