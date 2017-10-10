import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {get} from '../../services/persist';
import {makeAction} from '../../redux/actions/makeAction';
import {auth} from '../../redux/actions/actionTypes';
import {DASHBOARD_PAGE} from '../../configuration/paths';

const LogIn = ({logInAction, history}) => {
    const callback = () => history.push(get('previous_location') || DASHBOARD_PAGE);
    return (
        <div className="container">
            <form className="form-signin" onSubmit={(event) => {
                event.preventDefault();
                logInAction({
                    data: {
                        username: event.target[0].value,
                        password: event.target[1].value,
                    },
                    callback: callback,
                });
            }}>
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" defaultValue="remember-me"/> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    );
};

LogIn.propTypes = {
    logInAction: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    logInAction: makeAction(auth.LOG_IN),
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn));
