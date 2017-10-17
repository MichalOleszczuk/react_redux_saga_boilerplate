import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {get} from '../../services/persist';
import {makeAction} from '../../redux/actions/makeAction';
import {auth} from '../../redux/actions/actionTypes';
import {DASHBOARD_PAGE} from '../../configuration/paths';
import Logo from '../../design/images/react-logo.png';

const LogIn = ({logInAction, history}) => {
    const callback = () => history.push(get('previous_location') || DASHBOARD_PAGE);
    return [
        <img key="logo" className="react-logo" src={Logo}/>,
        <form key="login-form" className="login-form" onSubmit={(event) => {
            event.preventDefault();
            logInAction({
                data: {
                    username: event.target[0].value,
                    password: event.target[1].value,
                },
                callback: callback,
            });
        }}>
            <div className="login-title">React | Boilerplate</div>
            <div className="login-inputs">
                <div className="login-input-wrapper">
                    <label htmlFor="inputEmail">Email address:</label>
                    <input type="email" id="inputEmail" required autoFocus/>
                </div>
                <div className="login-input-wrapper">
                    <label htmlFor="inputPassword">Password:</label>
                    <input type="password" id="inputPassword" required/>
                </div>
                <button className="login-button" type="submit">Sign in</button>
            </div>
        </form>,
    ];
};

LogIn.propTypes = {
    logInAction: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    logInAction: makeAction(auth.LOG_IN),
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn));
