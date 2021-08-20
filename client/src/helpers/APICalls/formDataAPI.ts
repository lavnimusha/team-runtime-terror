import axios from 'axios';

const formDataAPI = async (file: any) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const res = await axios.post('http://localhost:3001/profile/profile-photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err) {
    if (err.response.status === 500) {
      console.log('there was a problem with the server');
    }
    console.log(err.response.data.msg);
  }
};
export default formDataAPI;
