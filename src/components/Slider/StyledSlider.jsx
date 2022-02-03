import styled from 'styled-components';

const highlightPink = '#ea4c8966';

export const SliderContainer = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    margin: 0;
    padding: 0 10%;
    position: relative;
  }
  img {
    border-radius: 10px;
    width: 80%;
  }
  svg {
    font-size: 3rem;
    position: absolute;
    z-index: 10;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: ${highlightPink};
    }
  }
  .rightArrow {
    right: 10%;
  }
  .leftArrow {
    left: 10%;
  }
`;
