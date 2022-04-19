import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../css/DashNavbar.css';

export default class DashNavbar extends Component {
    render() {
        return (
            <div>
                <h1 className = "title"> Stock Analyzer</h1>

                <div className="DashNavbar">
                    <Link className="text" to="/">
                    <button className="btn-2">Sector</button>
                    </Link>
                    <Link className="text" to="/country">
                    <button className="btn-2">Country</button>
                    </Link>
                    <Link className="text" to="/currency">
                    <button className="btn-2">Currency</button>
                    </Link>
                    <Link className="text" to="/commodity">
                    <button className="btn-2">Commodity</button>
                    </Link>
                    <Link className="text" to="/cap">
                    <button className="btn-2">Cap</button>
                    </Link>
                </div>
            </div>
        
        )
    }
}
