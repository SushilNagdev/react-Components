const HeroSection = () => {
    return (
        <main className="hero">
            <div className="hero-content ">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, veniam eligendi incidunt praesentium inventore dicta cum magnam architecto voluptatem harum!</p>
                <div className="hero-btn">
                    <button>Shop now</button>
                    <button className="secondary-btn" >category</button>
                </div>
                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="brand-icons"></div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="Hero Image" />
            </div>

        </main>
    );
}
export default HeroSection;
