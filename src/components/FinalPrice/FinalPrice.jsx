
import "./FinalPrice.css";

export const FinalPrice =({singleHotel})=>{

    const {price, rating} = singleHotel;
    return (
        <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating d-flex align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large">Rs.{price}</span> night
        </p>
        <span className="rating d-flex align-center">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>

     <div className="d-flex direction-column">
        <div className="grid-container-two-col selected-dates">
            <div className="checkin loc-container">
                <label>Check_In</label>
            </div>
            <div className="checkout loc-container">
                <label>Check_Out</label>
            </div>
        </div>
        <div className="guests gutter-sm">
            <p>GUESTS</p>
            <span>2 guest</span>
        </div>
     </div>
     <div>
        <button
          className="button btn-reserve btn-primary cursor"
         
        >
          Reserve
        </button>
      </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Rs. {price} x 2 nights</span>
          <span className="span">Rd. {price*2}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service fee</span>
          <span className="span">Rd. 200</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs. {price*2+200}</span>
        </div>
      </div>
      </div>
    );
};