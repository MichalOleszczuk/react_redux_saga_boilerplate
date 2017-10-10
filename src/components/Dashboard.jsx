import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {makeAction} from '../redux/actions/makeAction';
// import {auth} from '../redux/actions/actionTypes';

const Dashboard = () => (
    <div className="container">
        SIEMA
    </div>
);

Dashboard.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
