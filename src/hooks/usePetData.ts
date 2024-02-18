import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPets, setError } from "../store/slices/fuzzySearchSlice";
import { BASE_URL } from "../constant";

export const usePetData = () => {
  const dispatch = useDispatch();

  const getPetData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      dispatch(setPets(data));
    } catch (error) {
      dispatch(setError("Error fetching pets"));
    }
  };
  useEffect(() => {
    getPetData();
  }, []);

  return {
    getPetData,
  };
};
