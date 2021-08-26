import { User } from '../interface/User';

const mockLoggedInUser: User = {
  id: '',
  email: 'mockLoggedInUser@gmail.com',
  username: 'mock LoggedIn user',
  profileId: '',
};

const mockOtherUser1: User = {
  id: '',
  username: 'Mock test user 1',
  email: 'mockTestUser1@gmail.com',
  profileId: '',
};
const mockOtherUser2: User = {
  id: '',
  username: 'Mock test user 2',
  email: 'mockTestUser2@gmail.com',
  profileId: '',
};
const mockOtherUser3: User = {
  id: '',
  username: 'Mock test user 3',
  email: 'mockTestUser3@gmail.com',
  profileId: '',
};

const mockOtherUsers: User[] = [mockOtherUser1, mockOtherUser2, mockOtherUser3];

export { mockLoggedInUser, mockOtherUsers };
