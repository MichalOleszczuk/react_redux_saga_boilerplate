import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {makeAction} from '../redux/actions/makeAction';
import {auth} from '../redux/actions/actionTypes';

const Dashboard = ({clicked, sagaClicked, onClick, sagaOnClick}) => (
    <div>
        <div>
            HELLO WORLD
            <button onClick={onClick}>Click me!</button>
            {clicked ? ' Button Clicked ' : ''}
        </div>
        <div>
            <button onClick={sagaOnClick}>Test saga!</button>
            {sagaClicked ? ' Saga Clicked ' : ''}
        </div>
    </div>
);

Dashboard.propTypes = {
    clicked: PropTypes.bool.isRequired,
    sagaClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    sagaOnClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    clicked: state.dashboard.clicked,
    sagaClicked: state.dashboard.sagaClicked,
});

const mapDispatchToProps = {
    onClick: makeAction(auth.LOG_IN),
    sagaOnClick: makeAction(auth.LOG_IN_IN_PROGRESS),
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
