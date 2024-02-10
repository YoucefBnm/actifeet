import { IconUser } from "@/assets"
import { Button } from "@/libs/shadcn/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/libs/shadcn/ui/popover"
import { Separator } from "@/libs/shadcn/ui/separator"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
interface AuthDropdownProps {
    title: string;
    lead: string;
    children: ReactNode
}
const AuthDropdownContainer = ({title,lead, children}:AuthDropdownProps) => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <img className="cursor-pointer" width={24} height={24} src={IconUser} aria-hidden='true' />
            </PopoverTrigger>

            <PopoverContent className=" flex flex-col gap-4 mr-4 w-80 py-6 px-4">
                <div className="flex flex-col gap-2">
                    <h4 className="heading heading-xs">
                        {title}
                    </h4>
                    <p className="text-sm leading-normal text-zinc-700">
                        {lead}
                    </p>
                </div>

                <Separator />
                <div className="flex flex-col items-stretch gap-2">
                    {children}
                </div>
            </PopoverContent>
        </Popover>
    )
}

const AuthDropdown = () => {
  return (
    // not logged
    <AuthDropdownContainer 
        title='create your account for free'
        lead="Create your account for free or if you already a member login to get member's benefits like free delivery, fast checkouts, coupons and descount, our special offers, our newest shoes, and more."
    >
        <Button>
            <Link to='/login'>Login</Link>
        </Button>
        <Button variant={'outline'} className="border-2 text-zinc-950 border-zinc-950">
            <Link to='/register'>Create your Account</Link>
        </Button>
        
    </AuthDropdownContainer>

    // loggedin
    // <AuthDropdownContainer
    //     title='you are now actifeet member'
    //     lead="explore our diverse shoes collections for all sports and all your activities."
    // >
    //     <Button>
    //         <Link to='/checkout'>Go to Checkout</Link>
    //     </Button>
    //     <Button onClick={() => {}} variant={'outline'} className="border-2 border-zinc-950 text-zinc-950">
    //         Sign Out
    //     </Button>
    // </AuthDropdownContainer>
  )
}

export default AuthDropdown