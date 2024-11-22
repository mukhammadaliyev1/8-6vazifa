"use strict";
const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
];
let promise = Promise.resolve(); // Boshlang'ich bo'sh va'da
urls.forEach((url) => {
    promise = promise
        .then(() => {
        console.log(`Fetching from URL: ${url}`);
        return fetch(url); // URL ga so'rov yuboriladi
    })
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
        }
        return response.json(); // Javob JSON formatiga o'giriladi
    })
        .then((data) => {
        console.log("Result:", data); // Ma'lumotni konsolga chiqarish
    })
        .catch((error) => {
        console.error("Error:", error); // Xatolikni ushlash
    });
});
