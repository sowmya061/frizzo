import React from "react";
import { Icon } from '@iconify/react';
import "./Contact.css"


export default function Contact() {

    return (   
        <div id="contact-section"> 
            <div className="contact-info">
                <div className="contact-heading">
                    <h1>Got doubts? We're here to help!</h1>
                    <div className="contact-mail">
                        <h2>Email id:</h2>
                        <span>abc@gmail.com</span>
                    </div>
                    <div className="contact-socials">
                        <h2>Follow us on socials:</h2>
                        <div className="contact-icons">
                            <Icon icon="akar-icons:instagram-fill" className="individ-icon"/>
                            <Icon icon="teenyicons:linkedin-outline" className="individ-icon"/>
                            <Icon icon="ri:twitter-x-line" className="individ-icon"/>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <input  type="text" required placeholder="NAME" />
                        <input  type="text" required placeholder="EMAIL ID" />
                        <textarea rows={8} placeholder="Message..." />
                        <button>SUBMIT</button>
                    </form>
                </div> 
            </div>
            <div className="contact-space">

            </div>

        </div>
    );
}