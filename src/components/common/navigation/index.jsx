import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Navigation = ({children, history}) => [
    <Header key="-1" history={history}/>,
    children,
    <Footer key="-2"/>,
];

Navigation.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    history: PropTypes.object.isRequired,
};

export default Navigation;
