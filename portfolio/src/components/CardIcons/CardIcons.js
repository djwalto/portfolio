import React from 'react'
import Image1 from "../Footer/git.svg";
import Image2 from "../NetflixCard/linkimage.svg";

function CardIcons(props) {
    let site = props.site;
    let repo = props.repo;

    return (
        <div className="links">
            <a href={repo} target="_blank" rel="noopener noreferrer">
                <img className="gitLink" src={Image1} height="50" width="50"></img>
            </a>
            <a href={site} target="_blank" rel="noopener noreferrer">
                <img className="liveLink" src={Image2} height="40" width="50"></img>
            </a>
        </div>
    )
}

export default CardIcons
