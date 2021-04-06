import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getListings} from "../actions/listing";
import Listing from "../components/listings";
import listings from "../reducers/listings";
import Pagination from "../components/Pagination";
import ListingForm from "../components/ListingForm";

const Home = (props) => {

    const [listings, setListings] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [listingPerPage, setListingPerPage] = useState(3)
    const [active, setActive] = useState(1)

    const indexOfLastListing = currentPage * listingPerPage
    const indexOfFirstListing = indexOfLastListing - listingPerPage
    const currentListings = props.listings.slice(indexOfFirstListing, indexOfLastListing)

    const visitPage=page=>{
        setCurrentPage(page)
        setActive(page)
    }
    const previous_number=()=>{
        if(currentPage !== 1){
            setCurrentPage(currentPage-1)
            setActive(currentPage-1)
        }
    }

    const next_number = ()=>{
        if(currentPage != Math.ceil(props.listings.length/3)){
            setCurrentPage(currentPage+1)
            setActive(currentPage+1)
        }
    }

    console.log("Home listing current props", currentListings)
    // console.log(props)
    return (
        <main className="home">
            <section className="home__form">
                <ListingForm setListing={setListings}/>
            </section>
            <section>
                <Listing listings={currentListings}/>
            </section>
            <section className="home__pagination">
                <div className="row">
                    {
                        props.listings.length !== 0 ? (
                            <Pagination
                                itemPerPage={listingPerPage}
                                count={props.listings.length}
                                visitPage={visitPage}
                                previous={previous_number}
                                next={next_number}
                                active={active}
                                setActive={setActive}
                            />
                        ): null
                    }
                </div>
            </section>
        </main>
    )
}
const mapStateToProps = (state) => ({
    listings: state.listings.listings
})
export default connect(mapStateToProps, {getListings})(Home)