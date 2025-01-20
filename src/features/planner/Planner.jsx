import { useDispatch, useSelector } from 'react-redux';
import {addCardToBoard, moveCard } from './plannerSlice';
import { DndContext } from '@dnd-kit/core';
import { FilePannel } from './FilePannel';
import { PlannerSets } from './PlannerSets';
import { imageCards } from '../../lib/imageCards';
import { PlannerGrid } from './PlannerGrid';



export const Planner = () => {
  const dispatch = useDispatch();
  const cells = useSelector(state => state.planner.cells)

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const findCellIndex = (arr, id) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          return i;
        }
      }
      return -1;
    }

    const cellId = active.id;
    const newCellPlace = over.id;
    const currentCard = cells.filter(cell => cell.id === cellId);
    const currentCellPlace = findCellIndex(cells, cellId)

    if (typeof(cellId) === 'number' ) {
      dispatch(addCardToBoard([imageCards.filter((card) => card.id === cellId ), newCellPlace]))
    } 
    if (typeof(cellId) === 'string') {
      if (currentCellPlace !== newCellPlace) {
        dispatch(moveCard([currentCard, newCellPlace, currentCellPlace]))
      }
    }
  }

  return(
      <div className="bg-white shadow-md px-8 pt-5 pb-7 flex float-start">
        <DndContext onDragEnd={handleDragEnd}>
          <div>
            <PlannerSets />
            <FilePannel />
          </div>
          <PlannerGrid />
        </DndContext> 
      </div>
  )
}



