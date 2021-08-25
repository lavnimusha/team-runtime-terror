import { FetchOptions } from '../../interface/FetchOptions';

const getProfileDetails = async( profile_id: string ) => {
    const fetchOptions: FetchOptions = {
        method: 'GET',
        credentials: 'include',
      };
      return await fetch(`/profiles/search?_id=${profile_id}`, fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
          error: { message: 'Unable to connect to server. Please try again' },
        }));
}

export default getProfileDetails;