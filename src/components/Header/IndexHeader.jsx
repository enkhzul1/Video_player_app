import React from "react";
import {
  Group,
  Text,
  Autocomplete,
  Avatar,
  useMantineColorScheme,
  SegmentedControl,
  Center,
  Box,
} from "@mantine/core";

import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
      <header className="relative bg-blueGray-200 pt-8 pb-6">
        <Group grow>
          <Text>TikEd</Text>
          <Autocomplete
            label="Your favorite framework/library"
            placeholder="Pick one"
            color={dark ? "yellow" : "blue"}
            data={["React", "Angular", "Svelte", "Vue"]}
          />

          <Group>
            <Avatar>
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1504349127817-111111111111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </Avatar>

            <ColorSchemeToggle />
          </Group>
        </Group>
      </header>
    </>
  );
}
