import { css, Flex } from 'theme-ui';
import styled from '@emotion/styled';

const StyledFlex = styled(Flex)`
  padding-top: 6rem;
  padding-left: 17rem;
  padding-bottom: 1rem;
  overflow: hidden;
  transition: all 0.5s;
  flex-direction: column;
  background-color: #f0f0f0;
  gap: 5rem;
  color: #000000;
  height: 100%;

  @media (max-width: 40rem) {
    padding-left: 22vw;
    padding-top: 7rem;
    & #image-container {
      height: 15rem;
    }
  }
`;

const MainSection = (props) => {
  return <StyledFlex type={props.type}>{props.children}</StyledFlex>;
};

export default MainSection;
