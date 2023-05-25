import styled from '@emotion/styled';
import MusicForm from './MusicForm';
import { Box } from 'theme-ui';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';

const Backdrop = styled(Box)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: #ffffff53;
  backdrop-filter: blur(5px);

  & form {
    width: 80%;
    height: max-content;
    margin: 0 auto;
  }
`;

const EditMusicForm = (props) => {
  const dispatch = useDispatch();
  const userSongs = useSelector((state) => state.userSongs.songs);

  const songIndexToEdit = useSelector((state) => state.ui.songIndexToEdit);

  const cancelHandler = (e) => {
    if (e.target.id !== 'backdrop') return;
    dispatch(uiSliceActions.toggleEditCard());
  };

  return (
    <Backdrop id="backdrop" onClick={cancelHandler} type={props.type}>
      <MusicForm type="edit" songIndexToEdit={songIndexToEdit} />
    </Backdrop>
  );
};
export default EditMusicForm;
