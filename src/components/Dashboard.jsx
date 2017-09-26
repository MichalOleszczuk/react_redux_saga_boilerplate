import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {makeAction} from '../redux/actions/makeAction';
import {BUTTON_CLICKED, SAGA_BUTTON_CLICKED} from '../redux/actions/actionTypes';

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
    onClick: makeAction(BUTTON_CLICKED),
    sagaOnClick: makeAction(SAGA_BUTTON_CLICKED),
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
