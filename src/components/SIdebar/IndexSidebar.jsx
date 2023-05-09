import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// components

import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import { ToasterSuccess } from "../Toaster/notification";
import UserDropdown from "../Dropdowns/UserDropdown";
import { Group, Container, Stack, Image, Paper, Text } from "@mantine/core";
import {
  IconHome,
  IconSearch,
  IconCirclePlus,
  IconSettings,
  IconMessageCircle,
} from "@tabler/icons-react";

// statics

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();

  const handleLogout = () => {
    ToasterSuccess({ title: "Амжилттай гарлаа." });
  };

  return (
    <>
      <Toaster />
      <nav className="w-2/6 bg-red-500 ">
        <Stack spacing={0}>
          <Group grow p={15} className="bg-indigo-500">
            <IconHome />
            <IconSearch />
            <IconCirclePlus size={40} />
            <IconMessageCircle />
            <IconSettings />
          </Group>
          <Group pos="relative">
            <div>
              <Image
                src="https://yt3.googleusercontent.com/NTFaX7uizUm0OyHER7jDblyUxT7D_P5PcydEh4LlVR3VoVy8rzGbmlT6t5I5msjSxzWTrLrlbEc=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt="cover"
                height={200}
                withPlaceholder
              />
            </div>
            <Paper bg="none" pos="absolute" bottom={-80} left={20}>
              <img
                src="https://yt3.googleusercontent.com/ShxraulKC7bA9G-pveJbnIymRACL3w6q0M8a9jSjJMbe4Z6wpCZ3nPsg7fujbTiD3mCk13mfDw=s176-c-k-c0x00ffffff-no-rj"
                alt="avatar"
                width={150}
                height={150}
                className="ring-8 ring-red-500 rounded-full"
              />
            </Paper>
          </Group>
          <Group>
            <Stack>
              <Text>kali mommy</Text>
            </Stack>
          </Group>
        </Stack>
      </nav>
    </>
  );
}
