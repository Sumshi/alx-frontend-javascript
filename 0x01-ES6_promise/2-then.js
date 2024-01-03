export default function handleResponseFromAPI(promise) {
  const response = { status: 200, body: 'Success' };
  return promise
    .then(() => response)
    .catch((error) => Error)
    .finally(() => console.log('Got a response from the API'));
}
