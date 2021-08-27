import { FetchOptions } from '../../interface/FetchOptions';
import { ProfilesApiData } from '../../interface/Profile';

const getAllProfiles = async (): Promise<ProfilesApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/list`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export { getAllProfiles };
