import React from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {

    static propTypes = {
        onNameChange: PropTypes.func.isRequired
    }

    static defaultProps = {
        onNameChange: () => { }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onNameChange(this.nameEl.value ||'Jon');
    }

    render() {
        return (
            <div className="pane padded-more">
                <form>
                    <div className="form-group">
                        <label>Tell me your name</label>
                        <input 
                            required 
                            className="form-control" 
                            placeholder="Name"
                            ref={ref => this.nameEl = ref}
                        />
                    </div>
                    <div className="form-actions">
                        <button className="btn btn-form btn-primary">OK</button>
                    </div>
                </form>
            </div>
        )
    }

}