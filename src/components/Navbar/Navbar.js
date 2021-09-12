
import "./navbar.css";
const navbar = [{ title: "Home" }, { title: "About", content: [{ title: "Vision" },{ title: "Mision" },{title:"History"},{title:"Governing Council"}] }, { title: "Courses offered", content: [{ title: "home1" }] }, { title: "Placements", content: [{ title: "home1" }] }, { title: "Gallery", content: [{ title: "home1" }] }, { title: "Our Activities", content: [{ title: "home1" }] }, { title: "Contact", content: [{ title: "home1" }] }]
function Navbar() {
    return navbar.map(nav => {
        return <div class="dropdown">
            <button class="dropbtn">{nav.title}</button>
            <div class="dropdown-content">
                {nav.content && nav.content.map(con => {
                    return <a href="#">{con.title}</a>
                })}
            </div>
        </div>
    })
}

export default Navbar;
