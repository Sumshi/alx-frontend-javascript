export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const apiData = { status: 200, body: 'Success' };
    // const success = true;

    if (success) {
      resolve(apiData);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
// export function for external use in 0-main.js
// export default getFullResponseFromAPI;
