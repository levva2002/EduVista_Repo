import  { useState ,useEffect } from 'react';
import './HelpDesk.css';

// import { useState,useEffect } from "react";
// import './CourseContent.css';



export default function HelpDesk(){



    const [opened1,setopened1] = useState(false);
    const [opened2,setopened2] = useState(false);
    const [opened3,setopened3] = useState(false);
    const [opened4,setopened4] = useState(false);
    const [opened5,setopened5] = useState(false);
    const [opened6,setopened6] = useState(false);


    function toggledropdown1 (){
        setopened1(!opened1);
    };
    function toggledropdown2 (){
        setopened2(!opened2);
    };
    function toggledropdown3 (){
        setopened3(!opened3);
    };
    function toggledropdown4 (){
        setopened4(!opened4);
    };
    function toggledropdown5 (){
        setopened5(!opened5);
    };
    function toggledropdown6 (){
        setopened6(!opened6);
    };

    return(
        <div className={"HelpDeskPage"}>
            <div className="background-image">
            <div className="HelpDeskpage-Header">
                <div className="Helpdesklogo">
                    <img id="HelpDeskpage-Logo" src="./logo.png" alt="Logo" />
                </div>
                <h1 className="Helpdeskh1">Help Desk</h1>
            </div>
            <div className="HelpDeskpage-Container">
                
                <div className="HelpDeskpage-buttons">
                    <button className="HelpDeskpage-button" onClick={toggledropdown1}>Sign Up</button>
                    {opened1 && (
                        <div className="HelpDeskpage-Dropdown">
                        <ul className="HelpDeskpage-Dropdown-list">
                        1. Click "Sign up"
                        <li>Locate and click on the prominent "Sign Up" 
                        button on the platform's homepage to initiate the registration process.</li>
                        2. Complete your Profile
                        <li>Fill in the required information, including your name, email address, and a secure password. 
                        Ensure accuracy to receive important updates and personalized learning recommendations.</li>
                        3. Verify and Confirm
                        <li> Validate your email through a confirmation link sent to the provided email address.
                             Once verified, you're all set! Log in with your credentials to access a world of
                              educational opportunities tailored to your interests and goals.</li>

                        </ul>
                        </div>
                    )}
                    <button className="HelpDeskpage-button" onClick={toggledropdown2}>Payment Option</button>
                    {opened2 && (
                        <div className="HelpDesktpage-Dropdown">
                        <ul className="HelpDeskpage-Dropdown-list">
                        1. One-Time Payment
                        <li>Streamline your enrollment with a single, hassle-free transaction, 
                            making your learning journey instantly accessible.</li>
                        2. Bank Transfer
                        <li> Opt for a traditional approach by choosing Bank Transfer, 
                            allowing you to securely process payments directly from your bank account.</li>  
                        3. Token System
                        <li>Experience flexibility and security with our innovative Token System, 
                            offering a convenient way to manage and invest in your e-learning courses.</li>      
                        </ul>
                        </div>
                    )}
                    <button className="HelpDeskpage-button" onClick={toggledropdown3}>FAQ</button>
                    {opened3 && (
                        <div className="HelpDeskpage-Dropdown">
                        <ul className="HelpDeskpage-Dropdown-list">
                        1. How do I reset my password?
                        <li>To reset your password, click on the "Forgot Password" link on the login page. 
                            Follow the instructions sent to your registered email to create a new password securely.</li>
                        2. What payment methods are accepted?
                        <li>We accept one-time payments for instant access, bank transfers for traditional transactions, 
                            and our innovative token system for a flexible and secure payment experience.</li>
                        3. How can I access my purchased courses?
                        <li>Upon successful payment, your purchased courses will be available in your account dashboard. 
                            Simply log in, navigate to your dashboard, and start exploring your learning materials.</li>  
                        4. Can I get a refund for a course I've purchased?
                        <li>Refund policies vary by course, but generally, our platform offers a refund within a specified period after purchase.
                             Check the course details or contact our support team for specific refund information.</li>  
                        </ul>
                        </div>
                    )}
                    <button className="HelpDeskpage-button" onClick={toggledropdown4}>Navigation</button>
                    {opened4 && (
                        <div className="HelpDeskpage-Dropdown">
                        <ul className="HelpDeskpage-Dropdown-list">
                        "Navigate effortlessly through our comprehensive help desk by clicking the 'Support Center' button. 
                        Access quick solutions, FAQs, and personalized assistance to enhance your e-learning journey. 
                        Your success is just a click away!"
                        </ul>
                        </div>
                    )}
                    <button className="HelpDeskpage-button" onClick={toggledropdown5}>Chatbot</button>
                    {opened5 && (
                        <div className="HelpDeskpage-Dropdown">
                        <ul className="HelpDeskpage-Dropdown-list">
                        "Connect with our intelligent Chatbot by clicking the 'Chat Now' button! Instantly get answers to your queries, 
                        explore course recommendations, and enjoy real-time assistance tailored to your needs. 
                        Elevate your learning experience with the power of interactive support at your fingertips."
                        </ul>
                        </div>

                    )}
                    <button className="HelpDeskpage-button" onClick={toggledropdown6}>About</button>
                    {opened6 && (
                        <div className="HelpDeskpage-Dropdown">
                        <ul className="HelpDeskpage-Dropdown-list">
                        "Discover the heart of our e-learning community by clicking the 'About Us' button. 
                        Learn about our mission, values, and commitment to providing an enriching educational experience. 
                        Explore the team behind the platform, dedicated to empowering your learning journey. Welcome to a world of knowledge and inspiration!"
                        </ul>
                        </div>
                    )}
                </div>
                 
            </div>
            </div>
            

        </div>
    );


}
