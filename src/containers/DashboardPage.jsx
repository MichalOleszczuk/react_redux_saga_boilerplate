import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
// import PropTypes from 'prop-types';
import Dashboard from '../components/Dashboard';

class DashboardPage extends React.Component {
    render() {
        return (
            <Dashboard/>
        );
    }
}

DashboardPage.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage));
