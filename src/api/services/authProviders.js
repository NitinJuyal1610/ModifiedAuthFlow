import axios from 'axios';

const google = async (accessToken) => {
  const url = 'https://www.googleapis.com/oauth2/v3/userinfo';
  const params = { accessToken };
  const response = await axios.get(url, { params });
  const { sub, name, email, picture } = response.data;
  return {
    service: 'google',
    picture,
    id: sub,
    name,
    email,
  };
};

export default {
  google,
};
