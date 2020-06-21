import styled from 'styled-components';

export const GameShowcaseWrapper = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: 10vh max-content 10vh;
`;

export const GameShowcaseHeaderWrapper = styled('div')`
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const GamesWrapper = styled(`div`)`
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 90vh;
`;
