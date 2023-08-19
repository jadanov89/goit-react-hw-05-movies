import styled from '@emotion/styled';
export const SearchInput = styled.input`
  display: inline-block;
  width: 200px;
  outline: none;
  padding: 5px;
  border: 2px solid orangered;
  border-radius: 6px;
  font-size: 20px;
`;

export const SearchButton = styled.button`
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  color: orangered;
  border-radius: 6px;
  border: 2px solid orangered;
  background-color: white;
  width: 120px;
  margin-left: 15px;
  font-size: 20px;

  :hover {
    color: white;
    background-color: orangered;
  }
`;

export const SearchForm = styled.form`
  padding: 15px 0px;
  padding-top: 5px;
  border-bottom: 2px silid orangered;
  width: 100%;
  border-bottom: 1px solid orangered;
`;