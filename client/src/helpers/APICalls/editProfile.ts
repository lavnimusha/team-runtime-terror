import axios from 'axios';
import { IFormInitialValues } from '../../interface/Profile';

const handleSubmit = async (values: IFormInitialValues) => {
  await axios
    .post(`/profiles/update`, values)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default handleSubmit;
