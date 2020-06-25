import styled from 'styled-components';

export const GameBarWrapper = styled('div')`
  width: calc(100% * (0.3));
  height: 250px;
  padding: 5px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-size: small;

  cursor: pointer;
`;

export const GameBarName = styled('span')`
  font-weight: bolder;
`;
