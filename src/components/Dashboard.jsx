import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
// import {makeAction} from '../redux/actions/makeAction';
// import {auth} from '../redux/actions/actionTypes';

class Dashboard extends React.Component {
    // The constructor for a React component is called before it is mounted
    // The constructor is the right place to initialize state
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // setState() enqueues changes to the component state and tells React that this component and
        // its children need to be re-rendered with the updated state.
        this.setState(prevState => ({
            clicked: !prevState.clicked,
        }));
    }
    render() {
        return (
            <div className="dashboard">
                <h1 className="dashboard-title">Wellcome to React-Redux-Saga boilerplate!</h1>
                <h2>It's based on create-react-app enhanced with:</h2>
                <ul className="dashboard-list">
                    <li>- containers examples</li>
                    <li>- components examples</li>
                    <li>- router routes examples</li>
                    <li>- routes guardians</li>
                    <li>- input validators</li>
                    <li>- asynchronous calls with saga examples</li>
                    <li>- rootReducer, rootSaga examples</li>
                    <li>- ready requests library based on axios</li>
                    <li>- translation from counterpart</li>
                    <li>- jQuery added to WebPack configuration with global access</li>
                    <li>- bootstrap and font awesome (if you want to activate bootstrap go to main index.jsc and uncomment it)</li>
                </ul>
                <div className="spinner-box" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-cog fa-spin fa-5x' : 'fa fa-cog fa-5x'} aria-hidden="true"/>
                    <p>Spin me!</p>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
