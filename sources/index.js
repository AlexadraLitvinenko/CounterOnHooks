import Axios from 'axios';

const getUsers = search =>
  Axios.get('/users', {
    params: {
      search
    }
  });

export { getUsers };
