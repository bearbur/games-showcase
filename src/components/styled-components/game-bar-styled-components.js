import styled from 'styled-components';
import { inactiveBackgroundColor } from './search-panel-styled-components';

const hoverBackgroundGameBarColor = inactiveBackgroundColor;

export const GameBarWrapper = styled('div')`
  width: calc(100% * (0.3));
  height: 250px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: small;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: ${hoverBackgroundGameBarColor};
  }
`;

export const GameBarName = styled('span')`
  font-weight: bolder;
  padding: 0.25rem;
  height: 2.5rem;
`;

export const GameBarPoster = styled('div')`
  height: 75%;
  width: 95%;
  background-image: ${props => (props.img ? `url(${props.img})` : '')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GameBarLabel = styled('span')`
  font-weight: lighter;
`;

export const GameBarRowWrapper = styled('div')`
  height: 2rem;
  width: 95%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
