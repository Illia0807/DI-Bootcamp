import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent =()=>{
        return(
        <Carousel>
                <div>
                    <img src="/assets/1.jpg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="/assets/2.webp" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="/assets/3.webp" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="/assets/4.webp" />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        )

}
export default CarouselComponent;