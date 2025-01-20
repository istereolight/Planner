import { useSelector } from "react-redux";
import clsx from "clsx";
import { useDroppable } from '@dnd-kit/core'
import { ItemCard } from "../../components/ItemCard";


export const PlannerCell = ({keyCell, cell}) => {
  const isBorder = useSelector(state => state.planner.isBorder);

  const { setNodeRef } = useDroppable({
    id: keyCell,
  })

  return (
    <div 
      ref={setNodeRef}
      className={clsx(
      "-ml-px -mt-px flex items-center justify-center", 'cell', isBorder && "border border-slate-400")}
    >
      {cell.src && <ItemCard card={cell}/>}
    </div>
  )
}