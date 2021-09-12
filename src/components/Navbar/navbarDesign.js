
import "./navbar.css";
const navbar = [{ title: "Home" }, { title: "About" }, { title: "Courses offered" }, { title: "Placements" }, { title: "Gallery" }, { title: "Our Activities" }, { title: "Contact" }]
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top custom_navbar">
                <div class="container header_custom_container">
                    <a class="navbar-brand headerLogoImg_white" href="https://www.srmist.edu.in"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <div class="row">
                            <div class="col-md-12 header_navBar_1">
                                <div class="region region-home-menu-new">
                                    <div id="block-block-358" class="block block-block">


                                        <div class="content">
                                            <style type="text/css">
                                                <!--/*--><![CDATA[/* ><!--*/

.header_navBar_1 ul li{padding:0 7px 0 !important;}
@media only screen and (max-width: 1024px){
.header_navBar_1 ul li {padding: 0 7px 0 !important; }
}
@media only screen and (max-width: 768px){
.header_navBar_1 ul li {padding: 0 2px 0 !important; }
}

/*--><!]]>*/
</style><ul class="navbar-nav"><li><a href="https://www.healthconsole.com/SRM/" target="_blank">Telemedicine</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="/content/covid-19-updates">COVID-19 Updates</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="/Announcements">Announcements</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="/content/gateway-student">Students</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="/content/gateway-faculty">Faculty</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="/content/visitors">Visitors</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="/alumni-affairs/about-us">Alumni</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="https://srm.careers/" target="_blank">Career</a></li>
                                                <li class="devider d-none d-md-block d-lg-block">|</li>
                                                <li><a href="/contact-us">Contact Us </a></li>
                                                <li class="dummy"><a href="https://mail.srmist.edu.in/" target="_blank"><i class="fa fa-envelope"></i></a></li>
                                                <li class="dummy">
                                                    <a href="#"><i class="fa fa-search" id="search"></i></a>
                                                    <div class="form-popup" id="myForm">
                                                        <form accept-charset="UTF-8" action="/" class="form-container" id="search-block-form--2" method="post">
                                                            <input id="edit-search-block-form--4" name="search_block_form" placeholder="Search" type="text" value=""><input name="form_build_id" type="hidden" value="form-lNHyP4lphniWSkH51lzjdegsRU-yvjjI5bA3j69Q8QY"><input name="form_id" type="hidden" value="search_block_form"></form>
</div>
</li>
</ul>  </div>
</div>
  </div>
                                        </div>
                                        <div class="col-md-12 header_navBar_2">
                                            <ul class="navbar-nav"><li><a href="https://www.srmist.edu.in/#events" class="Events">Events</a></li><li><a href="https://www.srmist.edu.in/#academics" class="Academics">Academics</a></li><li><a href="https://www.srmist.edu.in/#research" class="Research">Research</a></li><li><a href="https://www.srmist.edu.in/#campus" class="Campus Life">Campus Life</a></li><li><a href="https://www.srmist.edu.in/#admission" class="Admission">Admission</a></li><li><a href="https://www.srmist.edu.in/#about" class="About">About</a></li><li><a href="https://www.srmist.edu.in/admission-india/" class="Apply Now">Apply Now</a></li></ul>					</div>
                                    </div>
                                </div>
                            </div>
	</nav>
        </>
    );
}

export default Navbar;
