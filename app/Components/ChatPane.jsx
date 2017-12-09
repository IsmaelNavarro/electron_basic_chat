import React from 'react';
import Participants from './Participants';
import Conversation from './Conversation';

const ChatPane = (props) => {
  const { client } = props;
  return (
    <div className="pane-group">
      <Participants client={client}/>
      <Conversation client={client}/>
    </div>
  );
};

export default ChatPane;