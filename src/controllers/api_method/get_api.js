import {baseUrl} from '../constant/base_url';

export const getApi = async (url, setData) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Accept': 'application/json',
      'Authorization': `Bearer Wookie2019`,
      'cache-control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    },
  };
  fetch(`${baseUrl}${url}`, requestOptions)
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      setData(error);
    });
};
