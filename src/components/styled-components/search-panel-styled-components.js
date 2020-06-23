import styled from 'styled-components';

const inactiveBackgroundColor = 'rgba(200,200,200,0.5)';
const inactiveColor = 'rgba(255,255,255,1)';

export const SearchPanelWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

export const SearchGamesInput = styled('input')`
  border: none;
  width: 70%;
  text-transform: uppercase;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: ${inactiveBackgroundColor};
  ::placeholder {
    color: ${inactiveColor};
    opacity: 1;
  }
`;

export const SearchSubmit = styled('input')`
  border: none;
  width: 6rem;
  text-transform: uppercase;
  padding: 0.5rem;
  border-radius: 10px;
  text-transform: uppercase;
`;
