import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const TrendingList = styled.ul`
  list-style: none;
  width: 300px;
`;

export const TrendingItem = styled.li`
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  color: black;
  border-radius: 6px;
  border: 1px solid orangered;
  &.active {
    color: white;
    background-color: orangered;
  }

  :hover: not(.active) {
    color: white;
    background-color: orangered;
  }
`;