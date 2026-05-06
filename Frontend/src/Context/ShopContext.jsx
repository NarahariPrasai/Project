import { createContext, useState, useEffect, } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "Rs.";
    const delivery_fee = 150;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
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


    const getCartCount = () => {
        let totalCount = 0;

        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];
        }

        return totalCount;
    };

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);
    }

const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {

        const itemInfo = products.find(
            (product) => product.Book_id === Number(items)   // ✅ fix type
        );

        if (!itemInfo) continue;

        const quantity = cartItems[items];  // ✅ no inner loop needed

        if (quantity > 0) {
            totalAmount += itemInfo.PRICE * quantity;  // ✅ correct key
        }
    }

    return totalAmount;
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
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;