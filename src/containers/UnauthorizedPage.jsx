import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import disableWrapperAction from '../redux/actions/common/navigation/disableWrapper';

class UnauthorizedPage extends React.Component {
    componentDidMount() {
        this.props.disableWrapper();
    }

    render() {
        return (
            <div>
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
    disableWrapper: disableWrapperAction,
};

export default connect(
    () => {},
    mapDispatchToProps
)(UnauthorizedPage);


