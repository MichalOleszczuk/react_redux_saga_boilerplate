import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {navigation} from '../redux/actions/actionTypes';
import {makeAction} from '../redux/actions/makeAction';

class UnauthorizedPage extends React.Component {
    componentWillMount() {
        this.props.disableWrapper();
    }

    render() {
        return (
            <div className="not-found-unauthorized-container">
                <b>403 - Unauthorized</b>
                <p>I'm sorry, You don't have privileges to view this page!</p>
            </div>
        );
    }
}

UnauthorizedPage.propTypes = {
    disableWrapper: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    disableWrapper: makeAction(navigation.DISABLE_WRAPPER),
};

export default connect(
    () => {},
    mapDispatchToProps
)(UnauthorizedPage);


