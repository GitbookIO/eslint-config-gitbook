const React = require('react');

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.property = 3;
    }

    onChange() {
    }

    renderPart() {
        return (
            <div>
                Something
            </div>
        );
    }

    render() {
        return (
            <input type="text" autoFocus={true} />
        );
    }
}

module.exports = Message;
