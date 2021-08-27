import { Box } from '@material-ui/core';
import loading from '../../Images/loading.gif';

const Loading = () => {
  return (
    <Box display="flex" mt={30} justifyContent="center">
      <img src={loading} style={{ alignSelf: 'center' }} alt="loading image" />
    </Box>
  );
};

export default Loading;
