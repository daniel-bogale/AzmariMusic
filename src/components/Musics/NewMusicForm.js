import MainSection from '../UI/MainSectionContainer';
import MusicForm from './MusicForm';

const NewMusicForm = (props) => {
  return (
    <MainSection type={props.type}>
      <div>
        <h3 className="title" id="add-music">
          Add Music
        </h3>
        <MusicForm type="new" />
      </div>
    </MainSection>
  );
};
export default NewMusicForm;
