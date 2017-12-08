import React from 'react';
import Participants from './Participants.jsx';
import Conversation from './Conversation.jsx';

const ChatPane = (props) => (
    <div className="pane-group">
      <Participants /> 
      <Conversation />
    </div>
);

export default ChatPane;