import styled from 'styled-components';

export const GameScreenshotsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex-wrap: nowrap;
  height: 150px;
  overflow-x: auto;
`;

export const ScreenshotsBar = styled('div')`
  height: 130px;
  width: 250px;
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
`;
