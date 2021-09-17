
import "./navbar.css";
const navbar = [{ title: "Home" }, { title: "About", content: [{ title: "Vision" }, { title: "Mision" }, { title: "History" }, { title: "Governing Council" }] }, {
    "title": "Administration",
    "content": [
        {
            "title": "Principal"
        },
        {
            "title": "Department",
            "children": {
                content:[
                {
                    "title": "English"
                },
                {
                    "title": "Tamil"
                },
                {
                    "title": "History"
                },
                {
                    "title": "Economics"
                },
                {
                    "title": "Mathematics"
                },
                {
                    "title": "Physics"
                },
                {
                    "title": "Chemistry"
                },
                {
                    "title": "Computer Science"
                },
                {
                    "title": "Zoology"
                },
                {
                    "title": "Commerce"
                },
                {
                    "title": "Business Administration"
                },
                {
                    "title": "Nutrition & Dietetics"
                }
            ]
        }
        },
        {
            "title": "College Library"
        },
        {
            "title": "Non Teaching Staff"
        }
    ]
}, { title: "Contact", content: [{ title: "Contact" }] }]
function Navbar() {
    function getDropDownOption(nav) {
        return <div class="dropdown-content">
            {nav.content && nav.content.map(con => {
                if (con.children) {
                    getDropDownOption(con)
                } else
                    return <a href="#">{con.title}</a>
            })}
        </div>
    }
    return navbar.map(nav => {
        return <div class="dropdown">
            <button class="dropbtn">{nav.title}</button>
            {getDropDownOption(nav)}
        </div>
    })
}

export default Navbar;
