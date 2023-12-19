import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className="heroSection">
                <div className="left">
                    <h1>YOUR FEET DESERVE THE BEST</h1>

                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                    <div className="heroBtn">
                        <button>Shop Now</button>
                        <button>Category</button>
                    </div>

                    <div className="availibleContainer">
                        <p>Also Available On</p>
                        <div className="icons">
                            <img src="../../../public/images/flipkart.png" alt="" />
                            <img src="../../../public/images/amazon.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="../../public/images/shoe_image.png" alt="" />
                </div>
            </div>
        </>
    )

}

export default Hero;