import { Flex } from 'theme-ui';
import styled from '@emotion/styled';

const StyledFlex = styled(Flex)`
  padding-top: 6rem;
  padding-left: 17rem;
  padding-bottom: 1rem;
  overflow: hidden;
  transition: all 0.5s;
  flex-direction: column;
  gap: 5rem;
  color: white;
  height: 100%;
  & h3 {
    color: white;
    margin: 0;
    margin-bottom: 1rem;
  }
  &:hover {
    background-color: black;
  }

  @media (max-width: 40rem) {
    padding-left: 22vw;
    padding-top: 7rem;
    & #image-container {
      height: 15rem;
    }
  }
`;

const MainSection = (props) => {
  return <StyledFlex>{props.children}</StyledFlex>;
};

export default MainSection;
