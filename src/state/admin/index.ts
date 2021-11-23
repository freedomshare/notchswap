import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AdminState, Admin } from '../types'

const initialState: AdminState = {
  data: null
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<Admin[]>) => {
      state.data = action.payload
    },
    clearAdmins: (state) => {
      state.data = null
    },
  },
})

// Actions
export const { setAdmin, clearAdmins } = adminSlice.actions

// Thunks
export const fetchAdmins = (admin: any) => async (dispatch: Dispatch) => {
  try {
    dispatch(setAdmin(admin))
  } catch (error) {
    console.error(error)
  }
}

export default adminSlice.reducer
