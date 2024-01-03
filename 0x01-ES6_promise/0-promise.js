function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const apiData = { message: "API response data" };
        const success = true;

        if (success) {
            resolve(apiData);
        } else {
            reject(new Error("Failed to fetch data from API"));
        }
    });
}

export default getResponseFromAPI;
