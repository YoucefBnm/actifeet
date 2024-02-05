import { Checkbox } from "@/libs/shadcn/ui/checkbox";
import { Label } from "@/libs/shadcn/ui/label";
import { selectIsFetching } from "@/store/shopCollection/shopCollection.selector";
import { useSelector } from "react-redux";

interface FilterItemProps {
    category: string;
    label: string;
    isChecked: boolean;
    handleChange: (checked:boolean) => void
}

const FilterItem = (props:FilterItemProps) => {

    const { category, label, isChecked, handleChange } = props
    const isFetching = useSelector(selectIsFetching)

    return (
      <div 
      className={`flex py-1 justify-center mb-2 items-center relative group-${category}`}
      >
        <Checkbox
          id={label}
          checked={isChecked}
          onCheckedChange={handleChange}
          value={label}
          disabled={isFetching}
          className={`absolute inset-0 w-full h-full input-${category} ${isChecked ? 'border-zinc-900 border-2' : 'border-slate-600'}`}
          style={category==='colors' ? { backgroundColor: label} : { backgroundColor: 'transparent'}}
        />
        <Label
          className={`capitalize text-sm ${isChecked ? 'text-zinc-900 font-semibold' : 'text-slate-600 font-normal'}`}
          htmlFor={label}
        >
          {label}
        </Label>
      </div>
    )
}

export default FilterItem