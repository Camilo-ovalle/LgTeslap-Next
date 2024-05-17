import axios from 'axios';

export const registerRequest = (user: any) =>
  axios.post(`http://localhost:3000/api/auth/testUserRegister`, user);
