import { useLocation, useNavigate } from 'react-router-dom'
import './Route2.css'

export default function Route1(){

    const location = useLocation();
    const spacexData = location.state.spacexData;

    const navigate = useNavigate();
    
    var date = spacexData.launch_date_local.split("T",1);
    var year_month_day = date[0].split("-");

    var old_link = spacexData.links.video_link.split("/",4)
    var link = "https://www.youtube.com/embed/" + old_link[3]

    console.log(spacexData)

    if(spacexData.ships.length > 0){
        return(
            <div className= "info-container">
                <div className="id_miss-container">
                        <h1>{spacexData.id}</h1>
                        <h2>{spacexData.mission_name}</h2>
                </div>
                <div className="date-container">
                    <h3>Date: {year_month_day[2]}. {year_month_day[1]}. {year_month_day[0]}</h3>
                </div>
                <div className="site_name-container">
                    <p><strong>Site name:</strong> {spacexData.launch_site.site_name_long}</p>
                </div>
                <div className="rocket_info-container">
                    <p><strong>Rocket:</strong></p>
                    <ul>
                        <li>Name: {spacexData.rocket.rocket_name}</li>
                        <li>Height: {spacexData.rocket.rocket.height.meters} meters</li>
                        <li>Mass: {spacexData.rocket.rocket.mass.kg} kg</li>
                        <li>Number of landing legs: {spacexData.rocket.rocket.landing_legs.number}</li>
                        <li>Material of landing legs: {spacexData.rocket.rocket.landing_legs.material}</li>
                        <li>{spacexData.rocket.rocket.description}</li>
                    </ul>
                </div>
                <div className="ships-container">
                    <p><strong>Ship: </strong>{spacexData.ships[0].name}</p>
                    <img src={spacexData.ships[0].image} alt="" />
                </div>
                <div className="iframes-container">
                    <iframe title='Youtube viedo link' src={link} width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <iframe src={spacexData.links.article_link} width="560" height="315"></iframe>
                </div>
                <div className="button-container">
                    <button 
                    onClick={() => {
                        navigate(-1)
                    }}>Back</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className= "info-container">
                <div className="id-container">
                    <h1>{spacexData.id}</h1>
                </div>
                <div className="miss_name-container">
                    <h2>{spacexData.mission_name}</h2>
                </div>
                <div className="date-container">
                    <h3>Date: {year_month_day[2]}. {year_month_day[1]}. {year_month_day[0]}</h3>
                </div>
                <div className="site_name-container">
                    <p><strong>Site name:</strong> {spacexData.launch_site.site_name_long}</p>
                </div>
                <div className="rocket_info-container">
                    <p><strong>Rocket:</strong></p>
                    <ul>
                        <li>Height: {spacexData.rocket.rocket.height.meters} meters</li>
                        <li>Mass: {spacexData.rocket.rocket.mass.kg} kg</li>
                        <li>Number of landing legs: {spacexData.rocket.rocket.landing_legs.number}</li>
                        <li>Material of landing legs: {spacexData.rocket.rocket.landing_legs.material}</li>
                        <li>{spacexData.rocket.rocket.description}</li>
                    </ul>
                </div>
                <div className="iframes-container">
                    <iframe title='Youtube viedo link' src={link} width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
                    <iframe src={spacexData.links.article_link} width="560" height="315" frameBorder="0"></iframe>
                </div>
                <div className="button-container">
                    <button 
                    onClick={() => {
                        navigate(-1)
                    }}>Back</button>
                </div>
            </div>
        )
    }
}