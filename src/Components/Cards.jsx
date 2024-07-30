import React from 'react'

const Cards = ({item, handleClick}) => {
  const {title, author, price, amount} = item;
  return (
    <>
    <div className="card w-64 h-96 shadow-xl">
  <figure>
    <img className=''
      src={item.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.desc}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{`$${price}`}</div>
      <button onClick={()=>handleClick(item)} className="badge badge-outline cursor-pointer">Add to Cart</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Cards
