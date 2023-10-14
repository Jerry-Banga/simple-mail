
// const API_BASE = "http://localhost:3001";
// //Predefined user
// const NAME = "Jerry";
// const LASTNAME = "Banga";

// export async function userAndmailsLoader() {

//   try {
//     //Retrieve the predefined user
//     const response = await fetch(API_BASE + `/user?name=${NAME}&lastName=${LASTNAME}`);
//     if(!response.ok){
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//      const user = await response.json();
//     if (user.name === NAME && user.lastName === LASTNAME) {
//       try {
//         //Retrieve the mails
//         const response = await fetch(API_BASE + "/inbox");

//         if(!response.ok){
//           return { user };
//         }

//         const mails =  await response.json();
//         return { mails, user };

//       } catch (error) {
//         console.error("Error while fetching the mails", error);
//       }
//     } 

//   } catch (error) {
//     console.error("Error while fetching the user: ", error);
//   }

//   return {}

// }