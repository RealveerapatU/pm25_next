"use client";
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
  user,
} from "@heroui/react";

export default function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <a href="/">
          <NavbarBrand>
            <p className="font-bold text-inherit">AirQualityMeasure</p>
          </NavbarBrand>
        </a>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="/">
            pm 2.5
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Subscription
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {username === "" || username === null ? (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button as={Link} color="warning" href="/login" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
