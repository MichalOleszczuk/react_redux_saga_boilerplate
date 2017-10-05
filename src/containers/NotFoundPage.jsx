import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {navigation} from '../redux/actions/actionTypes';
import {makeAction} from '../redux/actions/makeAction';

class NotFoundPage extends React.Component {
    componentWillMount() {
        this.props.disableWrapper();
    }

    render() {
        return (
            <div>
                <b>404 - Page Not Found</b>
                <p>I'm sorry, the page you were looking for cannot be found!</p>
            </div>
        );
    }
}

NotFoundPage.propTypes = {
    disableWrapper: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    disableWrapper: makeAction(navigation.DISABLE_WRAPPER),
};

export default connect(
    () => {},
    mapDispatchToProps
)(NotFoundPage);

