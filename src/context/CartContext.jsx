import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    //ALT HVAD JEG SKRIVER HER
    const [cartData, setCartData] = useState([]);

    return(
        <CartContext.Provider value={{cartData}}>
            {children}
        </CartContext.Provider>
        
    )
}