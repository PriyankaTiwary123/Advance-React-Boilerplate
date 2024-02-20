import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '../../components/types/pet';

interface UseFuzzySearchState {
  pets: Pet[];
  error: string | null;
  inputValue: string;
  filteredPets: Pet[];
  filteredPetsonDropDown: Pet[];
  isShowFilteredList: boolean;
  filterSource: 'search' | 'dropdown' | null;
  noResultsFound: boolean; // Flag to indicate if no results were found
}

const initialState: UseFuzzySearchState = {
  pets: [],
  error: null,
  inputValue: '',
  filteredPets: [],
  filteredPetsonDropDown: [],
  isShowFilteredList: false,
  filterSource: null,
  noResultsFound: false, // Initialize the flag to false
};

export const useFuzzySearchSlice = createSlice({
  name: 'useFuzzySearch',
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.pets = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setFilteredPets: (state, action: PayloadAction<Pet[]>) => {
      state.filteredPets = action.payload;
      state.filterSource = 'search';
      state.noResultsFound = action.payload.length === 0; // Set flag based on filteredPets length
    },
    setShowFiltered: (state, action: PayloadAction<boolean>) => {
      state.isShowFilteredList = action.payload;
    },
    setFilteredPetsOnDropdown: (state, action: PayloadAction<string>) => {
      const species = action.payload;
      state.filteredPetsonDropDown = state.filteredPets.filter((pet) => pet.species === species);
      state.filterSource = 'dropdown';
      state.noResultsFound = state.filteredPets.length === 0; // Set flag based on filteredPets length
    },
  },
});

export const {
  setPets,
  setError,
  setInputValue,
  setFilteredPets,
  setShowFiltered,
  setFilteredPetsOnDropdown,
} = useFuzzySearchSlice.actions;

export default useFuzzySearchSlice.reducer;
