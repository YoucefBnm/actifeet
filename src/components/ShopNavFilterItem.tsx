import { checkboxType, filterItemType } from "@/types/filterItems"
import { motion } from "framer-motion";
interface ShopNavFilterItemProps {
    filterItem: filterItemType;
    checkboxType: checkboxType;
    handleChange: () => void;
    isFiltring: boolean;
}

const ShopNavFilterItem = (props:ShopNavFilterItemProps) => {
    const { filterItem, checkboxType, handleChange, isFiltring} = props

  return (
    <motion.div 
        whileHover={
            filterItem.isChecked ? {backgroundColor: '#ccc'} : { opacity: .75 }} 
            className={`relative flex items-center justify-center py-1 group-${checkboxType}`}
        >
        <input
            type='checkbox'
            disabled={isFiltring}
            className={checkboxType}
            onChange={handleChange}
            id={filterItem.name}
            value={filterItem.name}
            style={checkboxType==='color' ? { backgroundColor: filterItem.name} : { backgroundColor: 'transparent'}}
        />
        <label htmlFor={filterItem.name} className="text-sm capitalize text-zinc-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {filterItem.name}
        </label>
    </motion.div>
  )
}

export default ShopNavFilterItem