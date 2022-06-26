import React from 'react'; 

export default function Card(props) {
    return (
        <div className="card">
            <img
                src={`${props.items.imageUrl}`}
                alt="img"
                className='card--image'
            ></img>
            <div className='card--text'>
                
                <div className='card-loc-link'>
                    <img
                        src={require('../images/placeholder.png')}
                        alt="placeholder"
                        className="placeholder"
                    ></img>
                    <p className='card--location'>{props.items.location.toUpperCase()}</p>
                    <a
                        href={`${props.items.googleMapsUrl}`}
                        className="card--link"
                    >
                    View on Google Maps
                    </a>
                </div>

                <h1 className='card--title'>{props.items.title}</h1>
                <p className='card--schedule'>
                    {props.items.startDate} - {props.items.endDate}
                </p>
                <p
                    className='card--description'    
                >
                    {props.items.description}
                </p>
            </div>
        </div>
    )
};
