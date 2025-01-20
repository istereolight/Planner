import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import clsx from "clsx";
import { PlannerCell } from "./PlannerCell";

export const PlannerGrid = () => {
  const cells = useSelector(state => state.planner.cells);
  return (
    <div className='bg-black rounded-2xl shadow-md px-8 pt-5 pb-7'>
      <Header />
      <div className={clsx(
        "grid grid-cols-[repeat(8,_90px)] grid-rows-[repeat(8,_90px)] pl-px pt-px mt-3")}>
          {cells.map((cell, index) => {
            return (
              <PlannerCell key={index} keyCell={index} cell={cell} />
            )
          })}
      </div>
    </div>
  )
}