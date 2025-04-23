import React from "react";
import "./CardDetails.css";
import { useStore, setCart } from "Container/store";

const CardDetails = (props) => {
    const {image, name, cuisine, rating } = props.data;
    const {dispatch} = useStore()

    const handleOnAdd = ()=>{
      dispatch(setCart(props.data))
    }

    return (
      <div className="card-details">
        <img src={image} alt={name} />
        <div className="price">Items at 200 Rs.</div>
        <div className="item-title">{name}</div>
        <div>Cuisine: {cuisine}</div>
        <div>Ratings: {rating}</div>
        <div className="add-to-cart" onClick={handleOnAdd}>Add to cart</div>
      </div>
    );
  }

export default CardDetails;
 
  