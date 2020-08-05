import React from 'react';
import './Card.css';

const Card = ({data, onFilter}) => {
    
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
                <li onClick={(e) => onFilter(e, data.role)}><a href="#">{data.role}</a></li>
                <li onClick={(e) => onFilter(e, data.level)}><a href="#">{data.level}</a></li>
                {
                    data.languages.map(lang => {
                        return (
                            <li onClick={(e) => onFilter(e, lang)}><a href="#">{lang}</a></li>
                        )
                    })
                }
                {
                    data.tools.map(tool => {
                        return (
                            <li onClick={(e) => onFilter(e, tool)}><a href="#">{tool}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default Card;