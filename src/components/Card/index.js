import React from 'react';
import './Card.css';

const Card = ({data}) => {
    
    return (
        <div className="card flex">
            <div className="infos">
                <img src={data.logo} alt="teste" />
                <div className="content">
                    <p className="company">{data.company}</p>
                    {data.new && <span className="badge">NEW!</span>}
                    {data.featured && <span className="badge featured">FEATURED</span>}
                    <h2>{data.position}</h2>
                    <div class="inferior">
                        <span>{data.postedAt}    •</span>
                        <span>    {data.contract}    •</span>
                        <span>    {data.location}</span>
                    </div>
                </div>
            </div>
            
            <ul className="tags">

            </ul>
        </div>
    )
}


export default Card;