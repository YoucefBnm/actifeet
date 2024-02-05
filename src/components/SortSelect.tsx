import { sortOptions } from "@/firebase/controllers"
import { useSetFilterParams } from "@/hooks/useSetFilterParams"
import { Label } from "@/libs/shadcn/ui/label"
import { RadioGroup, RadioGroupItem } from "@/libs/shadcn/ui/radio-group"
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/libs/shadcn/ui/select"
import { selectSortOption } from "@/store/shopCollection/shopCollection.selector"
import { useSelector } from "react-redux"

const SortSelect = () => {
    const {setSortParam} = useSetFilterParams()
    const selectedOption = useSelector(selectSortOption)

  return (
    <Select>
        <SelectTrigger className="w-full border-zinc-600 rounded-none text-zinc-800 font-heading heading">
            <SelectValue placeholder='sort by' />
        </SelectTrigger>
        <SelectContent className="py-2 px-2 w-[232px] border-zinc-300 rounded-sm">
            <RadioGroup
                className="gap-4"
                aria-checked={true}
            >
                {
                    Object.keys(sortOptions).map((key) => (
                        <div key={key} className="flex items-center space-x-2 transition-opacity delay-75 hover:opacity-75 cursor-pointer">
                            <RadioGroupItem 
                                checked={key===selectedOption} 
                                onClick={() => setSortParam(key)} 
                                value={key} 
                                id={key} 
                            />
                            <Label className="font-bold capitalize text-base" htmlFor={key}>{key}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
        </SelectContent>
    </Select>
  )
}

export default SortSelect