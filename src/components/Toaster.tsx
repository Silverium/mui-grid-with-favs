import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/store/globalStore";
import toasterSlice from "../store/toaster";

const Toaster: React.FC = () => {
    const dispatch = useDispatch();
    const handleClose = (): void => {
        dispatch(toasterSlice.actions.close())
    };
    const { message, isOpen, severity, autoHideDuration } = useSelector((state: RootState) => state.toaster);

    return (<Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
    >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
            {message}
        </Alert>
    </Snackbar>)
}
export default Toaster;