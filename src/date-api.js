// import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// export async function fetchFindDate(date, type) {
//     const URL = 'http://numbersapi.com/'
//     try {
//         const response = await axios.get(
//             `${URL}${date}/${type}`
//         );
//         return response.data;
//   } catch (error) {
//     Notify.failure("We're sorry, but you've reached the end of search results.")
//     }

// };


export async function fetchFindDate(date, type) {
    const URL = 'http://numbersapi.com/'
    fetch(`${URL}${date}/${type}`)
    .then((response) => response.text())
.then((data) => {
    console.log(data)
return data;
})
    
};





