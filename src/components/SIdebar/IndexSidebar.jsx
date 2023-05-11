import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// components

import { ToasterSuccess } from "../Toaster/notification";

import { Group, Stack, Image, Paper, Card, Grid, Text } from "@mantine/core";

import {
  IconHome,
  IconSearch,
  IconCirclePlus,
  IconSettings,
  IconMessageCircle,
} from "@tabler/icons-react";

// statics

const items = [
  {
    id: "1",
    title: "Awesome TikTok Video 1",
    description: "Check out this amazing TikTok video!",
    url: "https://www.tiktok.com/@username/video/1",
    thumbnail: "https://www.example.com/thumbnails/video1.jpg",
    likes: 1000,
    comments: 200,
    shares: 50,
  },
  {
    id: "2",
    title: "Incredible TikTok Video 2",
    description: "You won't believe this TikTok video!",
    url: "https://www.tiktok.com/@username/video/2",
    likes: 2500,
    comments: 400,
    shares: 100,
  },
  {
    id: "3",
    title: "Funny TikTok Video 3",
    description: "Prepare to laugh with this TikTok video!",
    url: "https://www.tiktok.com/@username/video/3",
    likes: 500,
    comments: 100,
    shares: 20,
  },
  {
    id: "4",
    title: "Cute TikTok Video 4",
    description: "This TikTok video will melt your heart!",
    url: "https://www.tiktok.com/@username/video/4",
    likes: 3000,
    comments: 600,
    shares: 200,
  },
  {
    id: "5",
    title: "Dance TikTok Video 5",
    description: "Get ready to move with this TikTok video!",
    url: "https://www.tiktok.com/@username/video/5",
    likes: 1500,
    comments: 300,
    shares: 75,
  },
  {
    id: "6",
    title: "Trending TikTok Video 6",
    description: "Join the trend with this TikTok video!",
    url: "https://www.tiktok.com/@username/video/6",
    likes: 2000,
    comments: 350,
    shares: 90,
  },
  {
    id: "7",
    title: "Hilarious TikTok Video 7",
    description: "Prepare to laugh out loud with this TikTok video!",
    url: "https://www.tiktok.com/@username/video/7",
    likes: 4000,
    comments: 800,
    shares: 250,
  },
  {
    id: "8",
    title: "Motivational TikTok Video 8",
    description: "Get inspired by this TikTok video!",
    url: "https://www.tiktok.com/@username/video/8",
    likes: 1200,
    comments: 250,
    shares: 60,
  },
  {
    id: "9",
    title: "Adorable TikTok Video 9",
    description: "You'll love this cute TikTok video!",
    url: "https://www.tiktok.com/@username/video/9",
    likes: 1800,
    comments: 400,
    shares: 100,
  },
];

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();

  const handleLogout = () => {
    ToasterSuccess({ title: "Амжилттай гарлаа." });
  };

  return (
    <>
      <Toaster />
      <nav className="w-2/6 bg-red-500 float-right	">
        <Stack spacing={0} pos="relative">
          <Group grow p={15} className="bg-indigo-500">
            <IconHome />
            <IconSearch />
            <IconCirclePlus size={40} />
            <IconMessageCircle />
            <IconSettings />
          </Group>
          <div className="mb-20">
            <Group>
              <Image
                src="https://yt3.googleusercontent.com/NTFaX7uizUm0OyHER7jDblyUxT7D_P5PcydEh4LlVR3VoVy8rzGbmlT6t5I5msjSxzWTrLrlbEc=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt="cover"
                height={200}
                withPlaceholder
              />
            </Group>
            <div className="relative">
              <Paper bg="none" pos="absolute" top={-70} left={20}>
                <img
                  src="https://yt3.googleusercontent.com/ShxraulKC7bA9G-pveJbnIymRACL3w6q0M8a9jSjJMbe4Z6wpCZ3nPsg7fujbTiD3mCk13mfDw=s176-c-k-c0x00ffffff-no-rj"
                  alt="avatar"
                  width={150}
                  height={150}
                  className="ring-8 ring-red-500 rounded-full"
                />
              </Paper>
              <Group>
                <div className="ml-auto mr-auto">
                  <Text>kali mommy</Text>
                  <Text>kali mommy</Text>
                </div>
              </Group>
            </div>
          </div>
          <Grid p={10} gutter="xl">
            {items.map((item) => (
              <Grid.Col key={item.id} span={4}>
                <Card w={130} h={130} className="w-full">
                  <Card.Section>
                    <Image src={item.thumbnail} />
                    {item.title}
                  </Card.Section>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </nav>
    </>
  );
}
