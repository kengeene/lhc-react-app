'use client'
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function App() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("pathname", pathname);
  }, [pathname]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "My Menu", path: "/" },
    { name: "Pantry", path: "/pantry" },
    { name: "Pricing", path: "/pricing" },
    { name: "Generate Recipie", path: "/generate-recipie" },
  ];


  return (
    <Navbar position="static">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={pathname === item.path}>
            <Link
              aria-current={pathname === item.path ?? 'page'}
              color="foreground"
              href={item.path}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/auth/sign-up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
