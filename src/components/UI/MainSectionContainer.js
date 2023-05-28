import { css, Flex } from 'theme-ui';
import styled from '@emotion/styled';

const StyledFlex = styled(Flex)`
  padding-top: 6rem;
  padding-left: 17rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  overflow: hidden;
  transition: all 0.5s;
  flex-direction: column;
  background-color: transparent;
  gap: 5rem;
  color: #000000;
  height: 100%;
  & .title {
    font-size: 2rem;
  }

  @media (max-width: 40rem) {
    padding-left: 5rem;
    padding-top: 5rem;
    padding-right: 1rem;
  }
`;

const MainSection = (props) => {
  return <StyledFlex type={props.type}>{props.children}</StyledFlex>;
};

export default MainSection;
