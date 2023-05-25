import MainSection from '../UI/MainSectionContainer';
import MusicForm from './MusicForm';

const NewMusicForm = (props) => {
  return (
    <MainSection type={props.type}>
      <MusicForm type="new" />
    </MainSection>
  );
};
export default NewMusicForm;
