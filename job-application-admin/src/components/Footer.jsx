import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-bottom">
                        <p>copyright &copy;{new Date().getFullYear()}Job Application Management - All rights reserved</p>
                    </div>
                </footer>
            </div> 
        )
    }
}
export default Footer