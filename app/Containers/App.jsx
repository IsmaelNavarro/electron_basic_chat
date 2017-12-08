import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Welcome from '../Components/Welcome';
import ChatPane from '../Components/ChatPane';

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