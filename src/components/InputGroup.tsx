import { Input } from "@/libs/shadcn/ui/input"
import { Label } from "@/libs/shadcn/ui/label"

type InputGroupProps = {
    label: string,
    inputType: string;
}

const InputGroup = (props: InputGroupProps) => {
    
    const { label, inputType } = props

  return (
    <div className="flex flex-col gap-2">
        <Label className="capitalize" htmlFor={label}>{label}</Label>
        <Input type={inputType} id={label} placeholder={label} />
    </div>
  )
}

export default InputGroup