import React, { Component } from 'react';
import "./content.css"
import image1 from "../assests/1.jpg"
import image2 from "../assests/2.jpg"
export default class ContentContainer extends Component {
    render() {
        return (
            <div className="content-container">
                <div className="left-content">
                    <h1>Latest Update</h1>
                    <p>UG Admissions 2021-22</p>
                    <p>PG Admissions 2021-22 - Online Application Registration</p>
                    <p>{"{ Last Date of Registration : 01-09-2021 }"}</p>
                </div>
                <div className="right-content">
                    <div className="content-container">
                        <div className="image-stack">
                            <div className="image-stack__item image-stack__item--top">
                                <img className="content-img" src={image1} />
                            </div>
                            <div className="image-stack__item image-stack__item--bottom">
                                <img className="content-img" src={image2} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}