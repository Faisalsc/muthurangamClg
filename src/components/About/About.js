import image1 from "../assests/images/about-left-image.png";
import image2 from "../assests/images/service-icon-01.png";
import image3 from "../assests/images/service-icon-02.png";
import image4 from "../assests/images/service-icon-03.png";
import image5 from "../assests/images/service-icon-04.png";
function About() {
    return <div id="about" class="about-us section">
        <div class="about-container">
            <div class="row">
                <div class="col-lg-4">
                    {/* <div class="left-image wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <img src={image1} alt="person graphic" height={200} />
                    </div> */}
                </div>
                <div class="col-lg-8 align-self-center">
                    <div class="services">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <div class="icon">
                                        <img src={image2}alt="reporting" />
                                    </div>
                                    <div class="right-text">
                                        <h4>Data Analysis</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                                    <div class="icon">
                                        <img src={image3}alt="" />
                                    </div>
                                    <div class="right-text">
                                        <h4>Data Reporting</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
                                    <div class="icon">
                                        <img src={image4} alt="" />
                                    </div>
                                    <div class="right-text">
                                        <h4>Web Analytics</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="item wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
                                    <div class="icon">
                                        <img src={image5} alt="" />
                                    </div>
                                    <div class="right-text">
                                        <h4>SEO Suggestions</h4>
                                        <p>Lorem ipsum dolor sit amet, ctetur aoi adipiscing eliter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default About;