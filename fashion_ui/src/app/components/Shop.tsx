const Shop =()=>{


    return(
        <>
        <div className="ShopContainer">
            <div><header className="headerOfShop">Sustainable. Beautiful. Ethical.</header></div>
            <div><button className="shop">Shop Now</button></div>
            <section className="imgsContainer">
                <img src="img5.jpg"></img>
                 <img src="img6.jpg"></img>
            </section>

<div className="offer">
    <h1 className="mx-2 text-4xl ml-20 mt-10 tracking-tighter text-balance sm:text-5xl lg:text-6xl xl:text-8xl">You can build anything with MLLA<span className="dot">.</span></h1>
    <h5 className="mx-2 text-1xl ml-20 mt-10 tracking-tighter text-balance sm:text-2xl lg:text-1xl xl:text-2xl">Well not quite anything, like you can't build a Custom Tailoring with it. But you can definitely build the style for you — <span className="underline font-bold">Hermès</span> did.

</h5>
 <button className="book ml-20 mt-10 mb-50">Book an Appointment</button></div>
            
        </div>
        </>
    )
}

export default Shop;