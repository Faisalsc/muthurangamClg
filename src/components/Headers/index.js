import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"
import Logo from "../assests/images/clg-logo.jpg"
export default class Headers extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <img src={Logo} />
                    <div>
                        <h2 style={{ marginLeft: "10px" }}>Muthurangam Government Arts College</h2>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <h3>(Autonomous)</h3>
                        </div>
                        <div >
                            <h6 style={{ fontSize: "22px",margin:"10px" }}>{"Recognized under sec 2(f) & 12(B) of UGC Act, 1956 || Permanently Affiliated to Thiruvalluvar University"}</h6>
                            <h6 style={{ fontSize: "22px",margin:"10px" }} >{"Re-Accredited By NAAC with 'B' Grade"}</h6>
                        </div>
                        <Navbar />
                    </div>
                </div>
                
            </>
        );
    }
}