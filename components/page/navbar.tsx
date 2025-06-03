"use client";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

export default function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("pm25username");
    setUsername(storedUsername);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "P.M. 2.5", path: "/" },
    { label: "subscription", path: "/subscription" },
  ];

  return (
    <div className="flex-auto">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">AirQualityMeasure</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu className="sm:hidden">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.label}>
              <Link href={item.path}>{item.label}</Link>
            </NavbarMenuItem>
          ))}
          {username === "" || username === null ? (
            <NavbarMenuItem>
              <Link href="/login">Login</Link>
            </NavbarMenuItem>
          ) : (
            <NavbarMenuItem>
              <Link href="/profile">{username}</Link>
            </NavbarMenuItem>
          )}
        </NavbarMenu>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">AirQualityMeasure</p>
          </NavbarBrand>
          {menuItems.map((item) => (
            <NavbarItem key={item.label}>
              <Link
                href={item.path}
                color="foreground"
                aria-current={item.label === "pm 2.5" ? "page" : undefined}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          {username === "" || username === null ? (
            <NavbarItem>
              <NextLink href="/login">
                <Button variant="bordered" as="div">
                  Log in
                </Button>
              </NextLink>
            </NavbarItem>
          ) : (
            <NavbarItem>
              {/* <Button as={Link} color="warning" href="/profile" variant="flat">
                {username}
              </Button> */}
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">{username}</Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Example with disabled actions"
                  disabledKeys={["edit", "delete"]}
                >
                  <DropdownItem key="new" onClick={logout}>
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          )}
        </NavbarContent>
      </Navbar>
    </div>
  );
}
function logout() {
  localStorage.removeItem("pm25username");
  window.location.reload();
}
