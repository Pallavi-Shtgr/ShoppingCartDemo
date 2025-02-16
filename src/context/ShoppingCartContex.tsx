import { useContext, createContext, ReactNode } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode;
};


type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increasecarQuantity: (id: number) => void;
    decreasecarQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}
const ShoppingCartContext = createContext({} as 
    ShoppingCartContext){
     const[cartItems, setCartItems] = useState<{[key: number]: number}>({});
    }
);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}
