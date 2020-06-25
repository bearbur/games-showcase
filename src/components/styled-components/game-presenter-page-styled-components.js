import styled from 'styled-components';

export const GamePresenterPageWrapper = styled('div')`
  height: 95%;
  width: 95%;
`;

export const GamePoster = styled('div')`
  height: 180px;
  width: 360px;
  background-image: ${props => (props.img ? `url(${props.img})` : '')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
