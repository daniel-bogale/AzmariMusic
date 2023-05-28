import styled from '@emotion/styled';
import { Text } from 'rebass';
import { Box } from 'theme-ui';

const Footer = () => {
  return (
    <footer>
      <hr />
      <Text as="footer" sx={{ padding: '1rem', textAlign: 'center', width: '100%' }}>
        &copy; 2023 Made by Daniel
      </Text>
    </footer>
  );
};
export default Footer;
