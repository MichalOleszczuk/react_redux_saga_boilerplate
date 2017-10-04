import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Navigation = ({children}) => [
    <Header key="-1"/>,
    {children},
    <Footer key="-2"/>,
];

Navigation.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Navigation;
