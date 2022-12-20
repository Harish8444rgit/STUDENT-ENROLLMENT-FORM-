import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {

    return (
        <footer className="text-light py-2" style={{ backgroundColor: "#071e22", position: "absolute", bottom: "0", width: "100%" }}>

            <div className="footer-copyright text-center">© 2022 Copyright :
                <Link to={"https://www.linkedin.com/in/harish-yadav-3ab363241/"} style={{ color: "aquamarine" }} className='mx-1'>Harish Yadav</Link>
            </div>
        </footer>
    )

}