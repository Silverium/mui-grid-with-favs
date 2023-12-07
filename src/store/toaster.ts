import { type AlertColor } from "@mui/material"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

const toaster = createSlice({
    name: "toaster",
    initialState: {
        isOpen: false,
        message: "",
        severity: "success" as AlertColor,
        autoHideDuration: 5000,
    },
    reducers: {
        open: (state, action: PayloadAction<{ message: string; severity?: AlertColor; autoHideDuration?: number }>) => {
            state.isOpen = true
            state.message = action.payload.message
            state.severity = action.payload.severity ?? "success"
            state.autoHideDuration = action.payload.autoHideDuration ?? 5000
        },
        close: (state) => {
            state.isOpen = false
        },
    },
})
export default toaster;