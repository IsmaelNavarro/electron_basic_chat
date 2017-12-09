import React from 'react';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';

export default class Participant extends React.Component {

    static defaultProps = {
        client: null
    }

    static propTypes = {
        client: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            participants: []
        };

        props.client.on('participants', this.onClientParticipants);
    }

    onClientParticipants = (participants) => {
        this.setState({
            participants: participants
        });
    }

    render() {
        const { participants } = this.state;
        return (
            <div className="pane pane-sm sidebar">
                <ul className="list-group">
                    {participants.map((user, i) => (
                        <li key={i} className="list-group-item">
                            <div className="media-body">
                                <strong><span className="icon icon-user"></span>&nbsp;{user.name}</strong>
                                <p>Joined <TimeAgo date={user.time} /> </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}