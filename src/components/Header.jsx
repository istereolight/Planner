import { useDispatch } from "react-redux";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label"
import * as Separator from "@radix-ui/react-separator";
import { toggleBorder } from "../features/planner/plannerSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const switchHandler = (e) => {
    dispatch(toggleBorder(e))
  }

  return (
    <div>
      <div className='flex justify-between w-full pb-6 mb-6'>
        <h1 className='text-white'>Карта заведения</h1>
        <div className=' relative'>
          <Label htmlFor="mesh" className='text-white absolute w-[100px] right-[40px] top-[5px] mr-3'>Показать сетку</Label>
          <Switch className='bg-primary' id='mesh' defaultChecked='true' onCheckedChange={(e) => switchHandler(e)}/>
        </div>
      </div>
    <Separator.Root className="SeparatorRoot bg-white" style={{ margin: "5px 0" }} />
    </div>
  )
}