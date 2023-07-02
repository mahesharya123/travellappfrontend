

import axios from "axios";
import {Fragment, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import{Navbar,HotelImages,HotelDetails,FinalPrice} from "../../components";
import "./SingleHotel.css"
export const SingleHotel = ()=>{
    const {id} = useParams();
    const [singleHotel,setSingleHotel] = useState({});
  useEffect (()=>{ 
    (async ()=>{
        try {
            const {data} = await axios.get(`https://exuberant-gold-fashion.cyclic.app/api/hotels/${id}`)
          setSingleHotel(data);
        } catch (error) {
            console.log(error)
        }

    })()
  },[id])

  const { name, state } = singleHotel;

    return(
        <Fragment>
            <Navbar/>
            <main className="single-hotel-page">
            <p className="hotel-name-add">
          {name}, {state}
           </p>
                <HotelImages singleHotel={singleHotel}/>
                <div className="d-flex">
                    <HotelDetails singleHotel={singleHotel}/>
                    <FinalPrice singleHotel={singleHotel}/>
                </div>

            </main>
        </Fragment>
    )


}