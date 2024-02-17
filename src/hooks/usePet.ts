import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setPets,
  setError,
  setFilteredPets,
} from "../store/slices/fuzzySearchSlice";
import { BASE_URL } from "../constant";

export const usePet = () => {
  const dispatch = useDispatch();
  const filterListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        dispatch(setPets(data));
      } catch (error) {
        dispatch(setError("Error fetching pets"));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterListRef.current &&
        !filterListRef.current.contains(event.target as Node)
      ) {
        dispatch(setFilteredPets([]));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return {
    filterListRef,
  };
};
