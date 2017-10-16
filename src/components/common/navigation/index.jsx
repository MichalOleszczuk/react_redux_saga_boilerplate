import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Navigation = ({children, history}) => [
    <Header key="-1" history={history}/>,
    <div key="-2" className="content-wrapper">
        {children}
    </div>,
    <Footer key="-3"/>,
];

Navigation.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    history: PropTypes.object.isRequired,
};

export default Navigation;
