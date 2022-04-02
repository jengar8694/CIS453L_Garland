import React, { Component } from "react";
import { Route,NavLink,HashRouter} from "react-router-dom";
import Home from "./Home";
import Hours from "./Hours";
import Merch from "./Merch";
import Rentals from "./Rentals";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Oceans Gift Shop & Bike Rental</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/rentals">Rentals</NavLink></li>
                        <li><NavLink to="/merch">Merchandise</NavLink></li>
                        <li><NavLink to="/hours">Hours & Location</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/rentals" component={Rentals}/>
                        <Route path="/merch" component={Merch} />
                        <Route path="/hours" component={Hours}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                    <bk/>
                    <ul className="footer"> 
                        <li>3212 Atlantic Ave. Virginia Beach, VA 32451</li>
                        <li>Oceans Gift Shop & Bike Rental</li>                       
                        <li>757-122-4562</li>
                    </ul>
                </div>
            </HashRouter>
        );
    }
}

export default Main;