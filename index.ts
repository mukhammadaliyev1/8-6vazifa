//     // Promise boyicha topshiriqlar

// //                   1-misol
// // const urls = [
// //     "https://jsonplaceholder.typicode.com/posts/1",
// //     "https://jsonplaceholder.typicode.com/posts/2",
// //     "https://jsonplaceholder.typicode.com/posts/3",
// //   ];

// //   let promise = Promise.resolve();

// //   urls.forEach((url) => {
// //     promise = promise
// //       .then(() => {
// //         console.log(`${url}`);
// //         return fetch(url);
// //       })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error(`Failed : ${response.status}`);
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         console.log("Result:", data);
// //       })
// //       .catch((error) => {
// //         console.error("Error:", error);
// //       });
// //   });

//                  //2-misol

// // const url1 = "https://jsonplaceholder.typicode.com/users";
// // const url2 = "https://jsonplaceholder.typicode.com/posts";

// //  function fetchingUrls(): void{

// //     Promise.all([fetch(url1).then(res =>res.json()),fetch(url2).then(res=>res.json())])
// //   .then((data)=>{
// //     console.log(
// //      "FETCH URLS :" ,data
// //     )
// //   }).catch((err)=>{
// //     console.log(err);
// //   });
// //  }
// //  fetchingUrls()

//      //3-misol

//     //  const url1 = "https://jsonplaceholder.typicode.com/photos";
//     //  const url2 = "https://jsonplaceholder.typicode.com/todos";
//     //  const url3 = "https://jsonplaceholder.typicode.com/comments";
//     //  function fetchDelay(url: string, delay: number): Promise<any> {
//     //    return new Promise((resolve, reject) => {
//     //      setTimeout(() => {
//     //        fetch(url)
//     //          .then((res) => res.json())
//     //          .then(resolve)
//     //          .catch(reject);
//     //      }, delay);
//     //    });
//     //  }
//     //  function fetchCompleted(): void {
//     //    const requests = [
//     //      fetchDelay(url1, Math.random() * 2000),
//     //      fetchDelay(url2, Math.random() * 2000),
//     //      fetchDelay(url3, Math.random() * 2000),
//     //    ];

//     //    Promise.race(requests)
//     //      .then((result) => {
//     //        console.log("First completed request result:", result);
//     //      })
//     //      .catch((error) => {
//     //        console.error("Error in requests:", error);
//     //      });
//     //  }
//     //  fetchCompleted();

//     // Async/await boyicha topshiriqlar

//         // 1-topshiriq

//         // const urls = [
//         //     "https://jsonplaceholder.typicode.com/posts/1",
//         //     "https://jsonplaceholder.typicode.com/posts/2",
//         //     "https://jsonplaceholder.typicode.com/posts/3",
//         //   ];
//         //   async function fetchSequentially(urls: string[]): Promise<void> {
//         //     for (const url of urls) {
//         //       try {
//         //         console.log(`Fetching from URL: ${url}`);
//         //         const response = await fetch(url);
//         //         if (!response.ok) {
//         //           throw new Error(`Failed to fetch: ${url}`);
//         //         }
//         //         const data = await response.json();
//         //         console.log("Result:", data);
//         //       } catch (error) {
//         //         console.error(`Error fetching from ${url}:`, error);
//         //       }
//         //     }
//         //   }
//         //   fetchSequentially(urls);

// 2-Misol

//const url1 = "https://jsonplaceholder.typicode.com/users";
// const url2 = "https://jsonplaceholder.typicode.com/posts";
// function fetchData() {
//   Promise.all([fetch(url1), fetch(url2)])
//     .then(([usersResponse, postsResponse]) => {
//       if (!usersResponse.ok || !postsResponse.ok) {
//         throw new Error("Failed to fetch data");
//       }
//       return Promise.all([usersResponse.json(), postsResponse.json()]);
//     })
//     .then(([users, posts]) => {
//       console.log("Fetched data:");
//       console.log([users, posts]);
//     })
//     .catch(() => {
//       console.error("Xatolik yuz berdi, ma’lumotni yuklab bo‘lmadi.");
//     });
// }

// fetchData();

//                   3-misol

// const url1 = "https://jsonplaceholder.typicode.com/photos";
// const url2 = "https://jsonplaceholder.typicode.com/todos";
// const url3 = "https://jsonplaceholder.typicode.com/comments";

// interface Photo {
//   id: number;
//   title: string;
//   url: string;
// }

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// interface Comment {
//   postId: number;
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// }

// async function fetchData() {

//   try {
//     const urls = [url1, url2, url3];

//     for (const url of urls) {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Request failed");
//         let data;
//         if (url === url1) data = await response.json() as Photo[];
//         if (url === url2) data = await response.json() as Todo[];
//         if (url === url3) data = await response.json() as Comment[];

//         console.log("First successful request result:", data);
//         return;
//       } catch (error) {
//         console.error(`Error with ${url}:`, error);
//       }
//     }
//     console.log("Barcha so‘rovlar xato bilan tugadi.");
//   } catch (error) {
//     console.error("Xatolik yuz berdi:", error);
//   }
// }

// fetchData();

// Generi

// // 1-misol
// function wrapData<T>(data: T): { status: string; data: T } {
//     return {
//       status: "success",
//       data,
//     };
//   }
//   const wrapString = wrapData("Hello, world!");
//   console.log(wrapString);
//   const wrapNumber = wrapData(42);
//   console.log(wrapNumber);
//   const wrapObject = wrapData({ id: 1, name: "John" });
//   console.log(wrapObject);
//  2-misol

// function findCommonElements<T>(array1: T[], array2: T[]): T[] {
//     return array1.filter(item => array2.includes(item));
//   }
//   const numbers1 = [1, 2, 3, 4];
//   const numbers2 = [3, 4, 5, 6];
//   const commonNumbers = findCommonElements(numbers1, numbers2);
//   console.log(commonNumbers);
//   const strings1 = ["apple", "banana", "cherry"];
//   const strings2 = ["banana", "cherry", "date"];
//   const commonStrings = findCommonElements(strings1, strings2);
//   console.log(commonStrings);

// 3-misol
// class Storage<T> {
//     private items: T[] = [];

//     addItem(item: T): void {
//       this.items.push(item);
//     }

//     removeItem(item: T): void {
//       this.items = this.items.filter(existingItem => existingItem !== item);
//     }

//     getItems(): T[] {
//       return this.items;
//     }
//   }

//   const stringStorage = new Storage<string>();
//   stringStorage.addItem("apple");
//   stringStorage.addItem("banana");
//   stringStorage.removeItem("apple");
//   console.log(stringStorage.getItems());

//   const numberStorage = new Storage<number>();
//   numberStorage.addItem(42);
//   numberStorage.addItem(7);
//   numberStorage.removeItem(7);
//   console.log(numberStorage.getItems());
