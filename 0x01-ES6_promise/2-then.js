function handleResponseFromAPI(promise) {
  const response = {
    status: 200,
    body: 'Success',
  };
  return promise
    .then(() => response)
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
export default handleResponseFromAPI;
