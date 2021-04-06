import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

const Card = (props) => {
    console.log("Card props", props)
    const numberWithCommas=x=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
    }
    return (
        <div className='card'>
            <h3 className='card__title'>{props.title}</h3>
            <div className='card__header'>
                <img  className='card__header__photo' style={{height:300}} src={props.photo_main} alt='House'/>
            </div>
            <p className='card__location'>{props.address}, {props.city}, {props.state}</p>
            <div className='row'>
                <div className='col-2-of-3'>
                    <p className='card__info'>Price: ${numberWithCommas(props.price)}</p>
                    <p className='card__info'>Bedrooms: {props.bedrooms}</p>
                    <p className='card__info'>Bathrooms: {props.bathrooms}</p>
                </div>
                <div className='col-1-of-3'>
                    <p className='card__saletype'>{props.sale_type}</p>
                    <p className='card__hometype'>{props.home_type}</p>
                    <p className='card__sqft'>Sqft: {props.sqft}</p>
                </div>
            </div>
            <Link className='card__link' to={`/listings/${props.slug}`}>View Listing</Link>
        </div>
    )
}
export default Card