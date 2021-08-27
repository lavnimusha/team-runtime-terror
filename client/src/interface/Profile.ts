export interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
  address: string;
  filePath: string;
  rate: string;
  availability?: [];
}

export interface ProfilesApiData {
  profiles?: Profile[];
  error?: { message: string };
}
