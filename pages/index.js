import React from 'react'

const Home = () => {
  return (
    <>
    HeroBanner
    <div>
      <h2>
        Best Selling Product</h2>
      <p>Pro gamers should have one</p>
    </div>


    <div>
      {["Product 1","Product 2"].map((product)=>product)}
    </div>

    Footer
    </>
  )
}
export default Home