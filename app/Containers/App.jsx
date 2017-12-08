import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import Welcome from '../Components/Welcome.jsx';
import ChatPane from '../Components/ChatPane.jsx';

export default class App extends React.Component {
    render() {
        const name = 'Name';
        return (
            <div className="window">
                <Header/>
                <div className="window-content">
                  { name ? <ChatPane/> : <Welcome/>}
                </div>
                <Footer/>
            </div>
        );
    }
}