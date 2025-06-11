import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import { FaGithub, FaFacebook } from "react-icons/fa";

const NAV_MENU = [
  {
    name: "Skills",
    icon: RectangleStackIcon,
    href: "#skills",
  },
  {
    name: "Projects",
    icon: RectangleStackIcon,
    href: "#projects",
  },
  {
    name: "Resume",
    icon: RectangleStackIcon,
    href: "#resume",
  },
  {
    name: "Commissions",
    icon: RectangleStackIcon,
    href: "#commissions",
  },
  {
    name: "Experience",
    icon: RectangleStackIcon,
    href: "#experience",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        as="a"
        href={href || "#"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 text-[14px] text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar
      placeholder=""
      onResize={() => {}}
      onResizeCapture={() => {}}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      shadow={false}
      fullWidth
      className="border-0 sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          placeholder=""
          onResize={() => {}}
          onResizeCapture={() => {}}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          color="blue-gray"
          className="text-lg font-bold"
        >
          JEM CDYN, Dev.
        </Typography>
        <ul className="ml-10 hidden items-center gap-5 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://www.facebook.com/jem.cdyn3" target="_blank">
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="text"
              className="flex items-center gap-2"
            >
              <FaFacebook className="w-[15px] h-auto" /> Facebook
            </Button>
          </a>
          <a href="https://github.com/cdynjm" target="_blank">
            <Button
              placeholder=""
              onResize={() => {}}
              onResizeCapture={() => {}}
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              color="gray"
              className="flex items-center gap-2"
            >
              <FaGithub className="w-[15px] h-auto" /> Github
            </Button>
          </a>
        </div>
        <IconButton
          placeholder=""
          onResize={() => {}}
          onResizeCapture={() => {}}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="https://www.facebook.com/jem.cdyn3" target="_blank">
              <Button
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                variant="text"
                className="flex items-center gap-2"
              >
                <FaFacebook className="w-[15px] h-auto" /> Facebook
              </Button>
            </a>
            <a href="https://github.com/cdynjm" target="_blank">
              <Button
                placeholder=""
                onResize={() => {}}
                onResizeCapture={() => {}}
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                color="gray"
                className="flex items-center gap-2"
              >
                <FaGithub className="w-[15px] h-auto" /> Github
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
