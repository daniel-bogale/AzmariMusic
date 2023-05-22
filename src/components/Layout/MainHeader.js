import SideBar from './SideBar';
import Header from './Header';
import { Flex } from 'theme-ui';

const MainHeader = () => {
  return (
    <Flex
      sx={{
        position: 'relative',
        alignItems: 'flex-start'
      }}>
      <SideBar />
      <Header />
    </Flex>
  );
};

export default MainHeader;
