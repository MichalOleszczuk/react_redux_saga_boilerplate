import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

class ReactContainer extends React.Component {
    render() {
        return (
            <div/>
        );
    }
}

ReactContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactContainer));
