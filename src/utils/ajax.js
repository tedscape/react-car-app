const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const get = url => (
    fetch(url)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => data)
        .catch((error) => {
          throw error;
        })
);

export default get;
