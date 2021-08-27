export interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
  availability?: [];
}

export interface ProfilesApiData {
  profiles?: Profile[];
  error?: { message: string };
}
