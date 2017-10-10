import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {makeAction} from '../../../redux/actions/makeAction';
import {auth} from '../../../redux/actions/actionTypes';
import {LOGIN_PAGE} from '../../../configuration/paths';

const Header = ({history, logOutAction}) => {
    const callback = () => history.push(LOGIN_PAGE);
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <button className="pull-right btn btn-default" onClick={() => logOutAction({callback: callback})}>Log Out</button>
            </div>
        </nav>
    );
};

Header.propTypes = {
    logOutAction: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    logOutAction: makeAction(auth.LOG_OUT),
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
