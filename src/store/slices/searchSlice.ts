import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AreaI {
  cityName: string;
  localityName: string;
  localityId: string;
  latitude: number;
  longitude: number;
  device_type: string;
}

export interface searchState {
  allData: AreaI[];
  searchString: string;
  searchSuggestions: AreaI[];
  showSuggestions: boolean;
  history: string[];
}

const loadHistoryFromLocalStorage = (): string[] => {
  try {
    const history = localStorage.getItem("searchHistory");
    return history ? JSON.parse(history) : [];
  } catch (e) {
    console.error("Failed to load history from localStorage:", e);
    return [];
  }
};

const initialState: searchState = {
  allData: [],
  searchString: "",
  searchSuggestions: [],
  showSuggestions: false,
  history: loadHistoryFromLocalStorage(),
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchString: (state, { payload }: PayloadAction<string>) => {
      state.searchString = payload;
    },
    setAllData: (state, { payload }: PayloadAction<AreaI[]>) => {
      state.allData = payload;
    },
    setSearchSuggestions: (state, { payload }: PayloadAction<AreaI[]>) => {
      state.searchSuggestions = payload;
    },
    setShowSuggestions: (state, { payload }: PayloadAction<boolean>) => {
      state.showSuggestions = payload;
    },
    addHistory: (state, { payload }: PayloadAction<string>) => {
      const index = state.history.findIndex(
        (str) => str === payload
      );
      if (index === -1) {
        state.history.unshift(payload);
      }
    },
    setHistory: (state, { payload }: PayloadAction<string[]>) => {
      state.history = payload;
    },
    deleteHistory: (state, { payload }: PayloadAction<string>) => {
      const index = state.history.findIndex(
        (str) => str === payload
      );
      if (index !== -1) {
        state.history.splice(index, 1);
      }
    },
  },
});

export const {
  setSearchString,
  setSearchSuggestions,
  setAllData,
  setShowSuggestions,
  setHistory,
  addHistory,
  deleteHistory,
} = searchSlice.actions;
export default searchSlice.reducer;
