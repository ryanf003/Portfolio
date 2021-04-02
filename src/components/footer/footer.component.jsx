import React from 'react'
import './footer.styles.css';

const Footer = () => {
    return (
        <div>
            <div className="py-2 text-center footer-style">© RYAN FERNANDEZ &nbsp; {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer
