import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cells: new Array(64).fill({id: '', src: null}),
  isBorder: true,
}

export const plannerSlice = createSlice({
  name: 'planner',
  initialState: initialState,
  reducers: {
    toggleBorder: (state, action) => {
      state.isBorder = action.payload;
    },
    addCardToBoard: (state, action) => {
      const [[card], newCellPlace] = action.payload;
      if (card) {
        state.cells[newCellPlace] = {
          id: `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
          src: card.src,
        }
      }
    },
    moveCard: (state, action) => {
      const [[card], newCellPlace, currentCellPlace] = action.payload;
      if (card) {
        state.cells[newCellPlace] = card;
        state.cells[currentCellPlace] = {id: '', src: null};
      }
    },
    updateCells: (state, action) => {
      state.cells = action.payload;
    }
  }, 
})

export const { toggleBorder, addCardToBoard, moveCard, updateCells } = plannerSlice.actions;

export default plannerSlice.reducer;
