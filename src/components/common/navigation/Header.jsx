import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {makeAction} from '../../../redux/actions/makeAction';
import {auth} from '../../../redux/actions/actionTypes';
import {LOGIN_PAGE} from '../../../configuration/paths';
import Logo from '../../../design/images/react-logo.png';

const Header = ({history, logOutAction}) => {
    const callback = () => history.push(LOGIN_PAGE);
    return (
        <nav className="navbar-fixed-top">
            <div className="navbar-logo-wrapper">
                <img className="navbar-logo" src={Logo}/>
            </div>
            <button type="button" className="logout-button" onClick={() => logOutAction({callback: callback})}>
                <i className="fa fa-sign-out fa-3x" aria-hidden="true"/>
            </button>
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
