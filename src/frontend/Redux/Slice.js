import { createSlice } from "@reduxjs/toolkit";
import jsonData from "../../_mock/allDatas.json";

const getWishList = JSON.parse(localStorage.getItem("wishList")) || [];
const getReviwes = JSON.parse(localStorage.getItem("reviews")) || [];
const getRecent = JSON.parse(localStorage.getItem("recent")) || [];
const getCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  ourProductsLists: [...jsonData.ourProductsList],
  category: [],
  priceRange: [5000, 100000],
  star: 0,
  newCollections: [...jsonData.data],
  dataView: [...jsonData.data],
  initdata: {},
  cart: getCart,
  recentlyViewedProducts: getRecent,
  reviews: [...getReviwes],
  wishlist: getWishList,
};

export const Slice = createSlice({
  name: "JwelleryShop",
  initialState,
  reducers: {
    // Handle items filter
    handleFilteritems: (state, action) => {
      state.dataView = jsonData.data.filter((values) => {
        if (action.payload === "AllProducts") {
          return values;
        }
        if (action.payload === "New Arrivals") {
          return values.isNew === true && values.soldout === false;
        }
        if (action.payload === "Fast Delivery") {
          return values.isDeliveryFast === true && values.soldout === false;
        }
        if (action.payload === "Currently Available") {
          return values.soldout === false;
        }
        return values;
      });
    },

    // handle sort items
    handleSortitems: (state, action) => {
      if (action.payload === "Popularity") {
        state.dataView = [...jsonData.data].filter((values) => {
          return values;
        });
      }
      if (action.payload === "A-Z") {
        state.dataView = [...state.dataView].sort((a, b) => {
          return a.productname.localeCompare(b.productname);
        });
      }
      if (action.payload === "Low to High") {
        state.dataView = [...state.dataView].sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (action.payload === "High to Low") {
        state.dataView = [...state.dataView].sort((a, b) => {
          return b.price - a.price;
        });
      }
    },

    handleCategorys: (state, action) => {
      const itemName = action.payload;
      if (Array.isArray(itemName) && itemName.length === 0) {
        state.category = []; // Set category to empty array
      } else {
        if (state.category.includes(itemName)) {
          state.category = state.category.filter((item) => item !== itemName);
        } else {
          state.category = [...state.category, itemName];
        }
      }
    },

    handleOtherCatergory: (state, action) => {
      state.category = [action.payload];
    },

    handlePriceRanges: (state, action) => {
      state.priceRange = action.payload;
    },

    handleStars: (state, action) => {
      const value = action.payload;
      if (state.star === value) {
        state.star = 0;
      } else {
        state.star = value;
      }
    },

    // Filter items category or star or price range wise
    handleApplyFilters: (state, action) => {
      const categories = state.category;
      const priceRanges = state.priceRange;
      const stars = parseFloat(state.star);

      const filteredData = jsonData.data.filter((values) => {
        const categoryMatch =
          categories.length !== 0 ? categories.includes(values.category) : true;
        const priceRangeMatch =
          values.price >= priceRanges[0] && values.price <= priceRanges[1];
        const starMatch =
          values.starCount === 0 ? true : values.starCount >= stars;

        return categoryMatch && priceRangeMatch && starMatch;
      });
      state.dataView = filteredData.length ? filteredData : state.dataView;
    },

    getOneProduct: (state, action) => {
      state.initdata = state.dataView.find(
        (values) => values.productname === action.payload
      );
      const itemindex = state.recentlyViewedProducts.findIndex(
        (Value) => Value.id === state.initdata.id
      );

      if (itemindex === -1) {
        state.recentlyViewedProducts = [
          ...state.recentlyViewedProducts,
          state.initdata,
        ];
      } else {
        state.recentlyViewedProducts = [...state.recentlyViewedProducts];
      }

      localStorage.setItem(
        "recent",
        JSON.stringify(state.recentlyViewedProducts)
      );
    },

    addToCart: (state, action) => {
      const cardData = action.payload;
      const itemindex = state.cart.findIndex(
        (Value) => Value.id === cardData.id
      );
      if (itemindex !== -1) {
        state.cart[itemindex].quantity += 1;
      } else {
        state.cart = [...state.cart, { ...cardData, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removecart: (state, action) => {
      state.cart = state.cart.filter(
        (values) => values.id !== parseFloat(action.payload)
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increment: (state, action) => {
      const id = action.payload;
      const itemindex = state.cart.findIndex((Value) => Value.id === id);
      if (itemindex !== -1) {
        state.cart[itemindex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    decrement: (state, action) => {
      const id = action.payload;
      const itemindex = state.cart.findIndex((value) => value.id === id);
      if (itemindex !== -1 && state.cart[itemindex].quantity > 1) {
        state.cart[itemindex].quantity -= 1;
      } else {
        state.cart.splice(itemindex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    clearall: (state, action) => {
      state.dataView = [...jsonData.data];
    },

    handleWishlist: (state, action) => {
      const product = action.payload;
      const getingWishList = JSON.parse(localStorage.getItem("wishList")) || [];
      const existingIndex = getingWishList.findIndex(
        (item) => item.id === product.id
      );
      let updatedWishlist;
      if (existingIndex === -1) {
        updatedWishlist = [...getingWishList, product];
      } else {
        updatedWishlist = getingWishList.filter(
          (item) => item.id !== product.id
        );
      }
      state.wishlist = updatedWishlist;
      localStorage.setItem("wishList", JSON.stringify(updatedWishlist));
    },

    handleReviews: (state, action) => {
      const updateingReviews = [...state.reviews, action.payload];
      localStorage.setItem("reviews", JSON.stringify(updateingReviews));
      state.reviews = updateingReviews;
    },
  },
});

export const {
  handleFilteritems,
  handleApplyFilters,
  getOneProduct,
  addToCart,
  removecart,
  increment,
  decrement,
  clearall,
  handleCategorys,
  handleStars,
  handlePriceRanges,
  handleWishlist,
  handleReviews,
  handleOtherCatergory,
  handleSortitems,
} = Slice.actions;
export default Slice.reducer;
