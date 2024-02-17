// useFuzzySearchSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '../../components/types/pet';

interface UseFuzzySearchState {
  pets: Pet[];
  error: string | null;
  inputValue: string;
  filteredPets: Pet[];
}

const initialState: UseFuzzySearchState = {
  pets: [],
  error: null,
  inputValue: '',
  filteredPets: [],
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
    },
  },
});

export const { setPets, setError, setInputValue, setFilteredPets } = useFuzzySearchSlice.actions;
export default useFuzzySearchSlice.reducer;
