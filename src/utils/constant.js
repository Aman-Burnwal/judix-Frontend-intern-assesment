export const NavList = ["Product", "Pricing", "Customers"]

import zerodha from "../assets/logo_zerodha.png";
import rapido from "../assets/logo_rapido.jpg";
import pwc from "../assets/logo_pwc.png";
import phonePe from "../assets/logo_phonePe.jpg";
import lenskart from "../assets/logo_lenskart.jpg";
import boat from "../assets/logo_boat.png";
import monitor from "../assets/computer_10124916.png"
import dots from "../assets/dots-blue.png"

import whatsapp from "../assets/icons8-whatsapp-50.png";
import linkedin from "../assets/icons8-linkedin-50.png";
import twiter from "../assets/icons8-twitter-50.png";
import instagram from "../assets/icons8-instagram-50.png"

import judix_logo from "../assets/logo_judix.png";
import phone_logo from "../assets/icons8-phone-40.png"
import email_logo from "../assets/icons8-email-30.png"
import green_tick from "../assets/icons8-tick-30.png"
import left_icon from "../assets/left.svg";
import right_icon from "../assets/right.svg";
import services_icon from "../assets/services_icon.png";
import legal_icon from "../assets/icons8-judgment-50.png";
import document_icon from "../assets/document_icon.png";

export {judix_logo, phone_logo, email_logo, green_tick, left_icon, right_icon}

export const brnadLogoList = [
    {
        image: pwc,
        height: "75px",
        width: "75px",
        name: "pwc",
    }, {
        image: zerodha,
        height: "60px",
        width: "69.23px",
        name: "Zerodha"

    }, {
        image: boat,
        height: "37.5px",
        width: "90.73px",
        name : "boat",

    }, {
        image: phonePe,
        height: "45px",
        width: "47.5px",
        name : "phonepe"

    }, {
        image: rapido,
        height: "52.5px",
        width: "95.48px",
        name: "rapido"

    }, {
        image: lenskart,
        height: "81.5px",
        width: "60px",
        name : "Lenskart",

    }
];

export const subHeaderData = [
    {
        logo: dots,
        para: "Current processes are inefficient, resulting in wasted time and resources, as well as a lack of accountability."
    },
    {
        logo: monitor,
        para: "Lack of digitization and excessive reliance on outdated tools such as MS Excel, Word, and emails."
    }
];

export const Features_card_details = [
    {
        feature_icon: services_icon,
        feature_name: "AI Legal Chatbot",
        feature_discription: "Access instant legal guidance and support through an interactive AI legal chatbot available 24*7."
    },
    {   feature_icon : document_icon,
        feature_name: "Contracts Lifecycle",
        feature_discription: "End to end lifecycle covering auto generation, collaboration, execution and management of contracts & agreements.",

    },
    {
        feature_icon: legal_icon,
        feature_name: "Business & Licenses",
        feature_discription: "Get your business registered as per government guidelines and obtain necessary licenses with ease."
        
    }
]

export const socialMedia = [instagram, whatsapp, linkedin, twiter]
