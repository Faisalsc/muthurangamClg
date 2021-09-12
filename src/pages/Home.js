import CarouselComponent from "../components/Carousel/Carousel";
import About from "../components/About/About";
import ContentContainer from "../components/content";

function Home() {
    return (
        <div className="page-container">
            <CarouselComponent />
            <div className="row">
                <div className="column middle" >
                    <About />
                </div>
            </div>
            <ContentContainer />
            <div className="footer">
                <i class="fab fa-facebook-square fa-3x icon-style"></i>
                <i class="fab fa-twitter-square fa-3x icon-style"></i>
                <i class="fab fa-google-plus-square fa-3x icon-style"></i>
                <i class="fab fa-linkedin fa-3x icon-style"></i>
                <i class="fab fa-instagram-square fa-3x icon-style"></i>
            </div>
        </div>
    );
}

export default Home;
