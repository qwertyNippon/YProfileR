// import { createContext, useEffect, useState } from "react";

// const BASE_URL = 'http://localhost:5000/api/';



// const DataProvider = (props) => {
    
//     const get_User = async () => {
//     const [user, setUser] = useState(null);
//     const [error, setError] = useState([null]);

//     useEffect(() => {
//         axios.get({BASE_URL})
//         .then(response => {
//             setUser(response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching profile:', error);
//         });
//     }, []);
// }

//     return (
//         <DataContext.Provider value={{
//             get_User,

//         }}>
//             {props.children}
//         </DataContext.Provider>
//     )
// } 
// export default DataProvider;
// export const DataContext = createContext();