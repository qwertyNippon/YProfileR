import { createContext, useEffect, useState } from "react";
const DataProvider = (props) => {
    // const [cart, setCart] = useState({size:0, total:0, movies:{}});
    const [addAnime, setAddAnime] = useState(null)
    const [user, setUser] = useState(null)
    useEffect(() => { console.log(user) });
    return (
        // <DataContext.Provider value={{'cart': cart, 'setCart': setCart}}>
        <DataContext.Provider value={{'addAnime': addAnime, 'setAddAnime': setAddAnime, 'user' : user, 'setUser' : setUser}}>
            {props.children}
        </DataContext.Provider>
    )
} 
export default DataProvider;
export const DataContext = createContext();