import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: 'filer',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return action.payload
    }
  }

})

export const { filterChange } = filterSlice.actions

export default filterSlice.reducer
