import React, {useState, useEffect} from 'react'
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Listing = () => {
    const [listings, setListings] = useState([])
    const [count, setCount] = useState(0)
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')
    const [active, setActive] = useState(1)

    // TODO same as componentDidMount life cycle method
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/listing/?page=1')
                setListings(res.data.results);
                setCount(res.data.count)
                setPrevious(res.data.previous)
                setNext(res.data.next)
            } catch (err) {

            }
        }
        fetchData()
    }, [])

    //display listing in card
    const displayListing = () => {
        let display = [];
        let result = []
        listings.map(listing => {
            return display.push(
                <Card
                    title={listing.title}
                    address={listing.address}
                    city={listing.city}
                    state={listing.state}
                    price={listing.price}
                    sale_type={listing.sale_type}
                    home_type={listing.home_type}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    sqft={listing.sqft}
                    photo_main={listing.photo_main}
                    slug={listing.slug}
                />
            );
        });
        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {display[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i + 1] ? display[i + 1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {display[i + 2] ? display[i + 2] : null}
                    </div>
                </div>
            );
        }
        return result
    }
    const visitPage = async page => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/listing/?page=${page}`)
            setListings(res.data.results)
            setPrevious(res.data.previous)
            setNext(res.data.next)
            setActive(page)
        } catch (err) {

        }
    }
    const previous_number = () => {
        axios.get(previous)
            .then(res => {
                setListings(res.data.results)
                setPrevious(res.data.previous)
                setNext(res.data.next)
                if (previous) {
                    setActive(active - 1)
                }
            })
    }

    const next_number = () => {
        axios.get(next)
            .then(res => {
                setListings(res.data.results);
                setPrevious(res.data.previous);
                setNext(res.data.next);
                if (next)
                    setActive(active + 1);
            })
            .catch(err => {

            });
    };
    console.log("Listing component")
    return (
        <main className="listings">
            <section className="listings__listings">
                {displayListing()}
            </section>
            <section className="listings__pagination">
                <div className="row">
                    <Pagination
                        itemsPerPage={3}
                        count={count}
                        visitPage={visitPage}
                        previous={previous_number}
                        next={next_number}
                        active={active}
                        setActive={setActive}
                    />
                </div>
            </section>
        </main>
    )
}
export default Listing