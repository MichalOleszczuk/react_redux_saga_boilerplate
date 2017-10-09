import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
// import PropTypes from 'prop-types';
import LogIn from '../components/authorization/LogIn';

class LogInPage extends React.Component {
    render() {
        return (
            <LogIn/>
        );
    }
}

LogInPage.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInPage));
