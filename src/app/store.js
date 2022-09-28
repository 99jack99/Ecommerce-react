import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../containers/User/userSlice'
import adminSlice from "../containers/User/Admin/AdminSlice"

export default configureStore({
    reducer: {
        user: userSlice,
        product: adminSlice,
    }
})