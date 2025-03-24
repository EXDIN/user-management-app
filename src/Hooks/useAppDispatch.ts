import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
