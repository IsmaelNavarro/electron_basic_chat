import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Welcome from '../Components/Welcome';
import ChatPane from '../Components/ChatPane';

import Server from '../Service/Server';
import Client from '../Service/Client';

const HOST = "127.0.0.1",
    PORT = 8001;

export default class App extends React.Component {

    constructor() {
        super();
        this.client = new Client();
        this.server = new Server();
        this.server.connect(HOST, PORT, this.client);

        this.state = {
            name: ''
        };
    }

    onNameChange = (userName) => {
        this.setState({ name: userName });
        this.client.join(userName);
    }

    render() {
        return (
            <div className="window">
                <Header />
                <div className="window-content">
                    {
                        this.state.name 
                        ? <ChatPane client={this.client} /> 
                        : <Welcome onNameChange={this.onNameChange} />
                    }
                </div>
                <Footer />
            </div>
        );
    }

}