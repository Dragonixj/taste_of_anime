import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
    return (
        <List>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Breakfast</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>Lunch</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Dinner</h4>
            </NavLink>
        </List>
    );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Category;
