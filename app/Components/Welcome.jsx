import React from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {

    static propTypes = {
        onNameChange: PropTypes.func.isRequired
    }

    static defaultProps = {
        onNameChange: () => { }
    }

    checkUserName = () => {
        return this.nameEl.value || false;
    }

    checkHost = () => {
        return this.hostEl.value || false;
    }

    handleStartAsHost = () => {
        let userName = this.checkUserName();
        if (userName) {
            this.props.startAsHost(userName);
            this.props.updateUserName(userName);
        } else {
            alert('You have to set your name');
        }
    }

    handleStartAsClient = () => {
        let userName = this.checkUserName();
        let host = this.checkHost();
        if (userName && host) {
            this.props.startAsClient(userName, host);
            this.props.updateUserName(userName);
        } else {
            let msg = '';
            if (!userName)
                msg += 'You have to set your name\n\r';
            if (!host)
                msg += 'You have to set the host';
            alert(msg);
        }
    }

    render() {
        return (
            <div className="pane padded-more">
                <div>
                    <div className="form-group">
                        <label>Tell me your name</label>
                        <input
                            required
                            className="form-control"
                            placeholder="Name"
                            ref={ref => this.nameEl = ref}
                        />
                    </div>
                    <div className="form-group">
                        <label>Host (only if enter as client)</label>
                        <input
                            className="form-control"
                            placeholder="Host"
                            ref={ref => this.hostEl = ref}
                        />
                    </div>
                    <div className="form-actions">
                        <button
                            onClick={this.handleStartAsHost}
                            className="btn btn-form btn-primary">
                            Start as host
                        </button>
                        <button
                            onClick={this.handleStartAsClient}
                            className="btn btn-form btn-primary">
                            Start as client
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}