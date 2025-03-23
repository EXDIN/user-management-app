import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";

export function useAppDispatch() {
    const dispatch = useDispatch<AppDispatch>();

    return dispatch;
}
