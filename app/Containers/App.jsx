import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Welcome from '../Components/Welcome';
import ChatPane from '../Components/ChatPane';

import Server from '../Service/Server';
import Client from '../Service/Client';
import ip from 'ip';

const HOST = ip.address(),
    PORT = 8001;

export default class App extends React.Component {

    constructor() {
        super();
        this.client = new Client();

        this.state = {
            name: ''
        };
    }

    updateUserName = (userName) => {
        this.setState({ name: userName });
    }

    startAsHost = (userName) => {
        this.server = new Server();
        this.server.connect(HOST, PORT, this.client, userName);
    }

    startAsClient = (userName, host) => {
        this.client
            .connect(host, PORT)
            .then(() => {
                this.client.join(userName);
            })
            .catch(() => {
                console.error("Client's error");
            });
    }

    render() {
        return (
            <div className="window">
                <Header />
                <div className="window-content">
                    {
                        this.state.name
                            ? <ChatPane client={this.client} />
                            : <Welcome
                                startAsHost={this.startAsHost}
                                startAsClient={this.startAsClient}
                                updateUserName={this.updateUserName} />
                    }
                </div>
                <Footer />
            </div>
        );
    }

}