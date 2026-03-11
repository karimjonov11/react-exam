import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    wishlist: [],
    cart: [],   // yangi cart state
  },
  reducers: {
    addtoWishlist: (state, action) => {
      if (!state.wishlist.find(item => item.id === action.payload.id)) {
        state.wishlist.push(action.payload)
      }
    },
    removefromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload)
    },
    addtoCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    removefromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    },
  }
})

export const { addtoWishlist, removefromWishlist, addtoCart, removefromCart } = shopSlice.actions
export default shopSlice.reducer
