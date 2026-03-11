import { configureStore } from '@reduxjs/toolkit'

import Shopreducer from './shopSlice'

export const store = configureStore({
    reducer:{
        shop: Shopreducer,
    }
})