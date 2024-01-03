export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const apiData = { message: 'API response data' };
    const success = true;

    if (success) {
      resolve(apiData);
    } else {
      reject(new Error('Failed to fetch data from API'));
    }
  });
}
// export function for external use in 0-main.js
// export default getResponseFromAPI;
