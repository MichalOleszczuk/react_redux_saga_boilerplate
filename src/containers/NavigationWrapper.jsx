import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import Navigation from '../components/common';

class NavigationWrapper extends React.Component {
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child, key) => React.cloneElement(child, {key: key})
        );
        if(this.props.disabled) {
            return (
                <div>
                    {childrenWithProps}
                </div>
            );
        } else {
            return (
                <Navigation>
                    {childrenWithProps}
                </Navigation>
            );
        }
    }
}

NavigationWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    disabled: state.navigation.disabled,
});


const mapDispatchToProps = {};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationWrapper));
