import { selectCurrentUser, selectLoading } from "@/store/user/user.selector";
import { ReactNode, memo } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";
import { Logo, UserIcon } from "@/assets";
import { Separator } from "./ui/separator";
import Spinner from "./Spinner";
import { Button } from "./ui/button";

interface AuthDropdownProps {
  title: string;
  lead: string;
  children: ReactNode;
}

const AuthDropdown = memo(function AuthDropdown({
  title,
  lead,
  children,
}: AuthDropdownProps) {
  const isLoading = useSelector(selectLoading);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const navigateToprofilePage = () =>
    navigate(`/profile/${currentUser?.displayName}`);

  return (
    <Popover>
      {currentUser ? (
        <Avatar
          title="go to profile"
          aria-label="profileLink"
          onClick={navigateToprofilePage}
          className=" cursor-pointer transition-opacity hover:opacity-75 size-8 flex items-center justify-center"
        >
          {isLoading && (
            <div className="size-5">
              <Spinner />
            </div>
          )}
          <AvatarImage src={currentUser.photoURL} />
          <AvatarFallback>
            {currentUser.displayName ? (
              <span className="font-bold uppercase">
                {currentUser.displayName[0]}
                {currentUser.displayName[1]}
              </span>
            ) : (
              <div className="size-4">
                <Logo />
              </div>
            )}
          </AvatarFallback>
        </Avatar>
      ) : (
        <PopoverTrigger
          aria-label="authentication dropdown trigger"
          className="cursor-pointer py-2 mx-2"
        >
          <img width={24} height={24} aria-hidden src={UserIcon} />
        </PopoverTrigger>
      )}

      <PopoverContent className="flex mt-4 flex-col gap-4 mr-4 w-80 py-6 px-4">
        <h4 className="font-heading">{title}</h4>

        <p className="text-sm leading-normal text-neutral-500">{lead}</p>

        <Separator />
        <div className="flex flex-col gap-2 items-stretch">{children}</div>
      </PopoverContent>
    </Popover>
  );
});

const NavAuth = () => {
  return (
    <AuthDropdown
      title="Create your account for free"
      lead="Create your account or if you are already a member login to get members benefits like fast checkout, coupons, discounts, special offers, and our newest shoes and collections."
    >
      <Button variant={"outline"} asChild>
        <Link className=" text-sm font-heading capitalize" to="/auth/signup">
          Register
        </Link>
      </Button>
      <Button variant={"default"} asChild>
        <Link className=" text-sm font-heading capitalize" to="/auth/signup">
          Login
        </Link>
      </Button>
    </AuthDropdown>
  );
};

export default NavAuth;
