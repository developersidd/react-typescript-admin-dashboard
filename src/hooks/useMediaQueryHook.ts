import { useMediaQuery } from "react-responsive";

const useMediaQueryHook = (value: number): boolean => {
    return useMediaQuery({ maxWidth: value });
}

export default useMediaQueryHook;