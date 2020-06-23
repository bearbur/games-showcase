import styled from 'styled-components';

const fontColor = 'aliceblue';
const backGroundColor = 'rgba(0,0,0,0.9)';
const lineColor = 'gray';

export const GameShowcaseWrapper = styled('div')`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  padding: 1rem;
  margin: 0;
  display: grid;
  grid-template-columns: 10vw 80vw 10vw;
  grid-template-rows: 10vh max-content;
  font-family: sans-serif;
  background-color: ${backGroundColor};
  color: ${fontColor};
`;

export const GameShowcaseHeaderWrapper = styled('div')`
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${lineColor};
  user-select: none;
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
  min-height: calc(100vh - 10vh - 2rem);
`;

export const GameWrapper = styled(`div`)`
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: calc(100vh - 10vh - 2rem);
`;

export const GameShowcaseLogo = styled('span')`
  font-weight: bolder;
  padding: 0.5rem;
`;
