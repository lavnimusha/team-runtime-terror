import axios from 'axios';

const handleAcceptHelper = async (status: any, category: any, index: any) => {
  try {
    await axios.post('http://localhost:3001/profile/manage-booking', JSON.stringify({ status, category, index }));
  } catch (err) {
    console.log(err);
  }
};

const handleDeclineHelper = async (status: any, category: any, index: any) => {
  try {
    await axios.post('http://localhost:3001/profile/manage-booking', JSON.stringify({ status, category, index }));
  } catch (err) {
    console.log(err);
  }
};

export { handleAcceptHelper, handleDeclineHelper };
