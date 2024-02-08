import { IconUser } from "@/assets"
import { Button } from "@/libs/shadcn/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem } from "@/libs/shadcn/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/libs/shadcn/ui/popover"
import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"
import { Link } from "react-router-dom"

const AuthDropdownVisitor = () => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <img className="cursor-pointer" width={24} height={24} src={IconUser} aria-hidden='true' />
            </PopoverTrigger>

            <PopoverContent className=" flex flex-col gap-4 mr-4 w-80 py-6 px-4">
                <div className="flex flex-col gap-2">
                    <h4 className="heading heading-xs">create your account for free</h4>
                    <p className="text-sm leading-normal">create your account for free or login to get member's benefits like free delivery, fast checkout, coupons, special offers and more.</p>
                </div>

                <div className="flex gap-2">
                    <Button variant={'outline'} className="border-2 text-zinc-950 border-zinc-950">
                        <Link to='/auth/register'>Create your Account</Link>
                    </Button>
                    <Button>
                        <Link to='/auth/login'>Login</Link>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

const AuthDropdown = () => {
  return (
    <AuthDropdownVisitor />
  )
}

export default AuthDropdown