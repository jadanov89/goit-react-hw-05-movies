import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const MoviePosterImage = styled.img`
  display: block;
  width: 300px;
  height: auto;
  border-radius: 8px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const InfoWrapper = styled.div`
  margin-left: 20px;
`;

export const GenresWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const MovieGenre = styled.p`
  margin-right: 10px;
  padding: 5px;
  border-radius: 4px;
  color: white;
  background-color: black;
  width: 120px;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 10px;
`;

export const InfoLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  color: black;
  border-radius: 6px;
  border: 1px solid orangered;
  width: 120px;
  margin-right: 15px;
  &.active {
    color: white;
    background-color: orangered;
  }

  :hover: not(.active) {
    color: white;
    background-color: orangered;
  }
`;
export const InfoLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 500px;
  list-style: none;
  margin-bottom: 30px;
`;

export const GenresTitle = styled.h3`
  margin-bottom: 0px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  display: block;
  color: black;
  border-radius: 6px;
  border: 1px solid orangered;
  width: 120px;
  margin-right: 15px;
  margin-top: 15px &.active {
    color: white;
    background-color: orangered;
  }

  :hover: not(.active) {
    color: white;
    background-color: orangered;
  }
`;