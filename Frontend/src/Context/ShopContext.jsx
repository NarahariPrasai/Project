import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "Rs.";
    const delivery_fee = 150;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    // ✅ SIMPLE CART (no size)
    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const cartData = { ...prev };

            if (cartData[itemId]) {
                cartData[itemId] += 1;
            } else {
                cartData[itemId] = 1;
            }

            return cartData;
        });
    };

    // ✅ TOTAL COUNT
    const getCartCount = () => {
        let totalCount = 0;

        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];
        }

        return totalCount;
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;