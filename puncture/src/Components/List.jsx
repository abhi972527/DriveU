import React from 'react'
import data from "./Data.json"
import { useState } from 'react';
import "./list.css"

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.location.toLowerCase().includes(props.input)
        }
    })
    return (
        <div className='bigBox'>
            {filteredData.map((item) => (
                <div className="box" key={item.id}>
                    {/* {<img src={item.shop_img} alt="Img" />} */}
                    {<br />}
                    {`Shop Name: ${item.shop_name}`}
                    {<br />}
                    {`Location: ${item.location}`}
                    {<br />}
                    {`Address: ${item.shop_address}`}
                    {<br />}
                    {`Ratings: ${item.ratings}`}
                    {<br />}
                    {`Radius: ${item.radius} km`}
                    {<br />}
                    {`Discounts: ${item.discounts} %`}
                    {<br />}
                    {`Online Payment: ${item.online_payments}`}
                    <br />
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

export default List