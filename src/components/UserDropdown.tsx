import { BookHeart, User, Ticket, LogOut, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import useUserStore from "@/features/auth/useUserStore";
import useLogout from "@/hooks/useLogout";
const UserDropdown = () => {
  const user = useUserStore((state) => state.user);
  const logout = useLogout();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className="hover:no-underline rounded-full overflow-hidden border border-black"
        >
          <Avatar>
            <AvatarImage className="object-cover" src={user?.imageUrl} />
            <AvatarFallback className="uppercase">
              {user?.name
                .split(" ")
                .map((char) => char.charAt(0))
                .join("")}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <Link className="w-full" to="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link className="w-full" to="/user/ticket">
            <DropdownMenuItem>
              <Ticket className="mr-2 h-4 w-4" />
              <span>My Ticket</span>
            </DropdownMenuItem>
          </Link>
          <Link to="/user/preferences">
            <DropdownMenuItem>
              <BookHeart className="mr-2 h-4 w-4" />
              <span>Personal Preferences</span>
            </DropdownMenuItem>
          </Link>
          <Link to="/user/partner">
            <DropdownMenuItem>
              <Heart className="mr-2 h-4 w-4" />
              <span>Partner Preferences</span>
            </DropdownMenuItem>
          </Link>
          <button className="w-full">
            <DropdownMenuItem onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
