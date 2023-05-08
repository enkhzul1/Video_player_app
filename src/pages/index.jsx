import IndexLayout from "@/layout/indexLayout";
import { Button } from "@mantine/core";

export default function Home({ videos }) {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos?.length ? (
        videos?.map((video) => (
          <VideoCard post={video} isShowingOnHome key={video._id} />
        ))
      ) : (
        // <NoResults text={`No Videos`} />'
        <div className="bg-red-100">
          <Button>start</Button>
        </div>
      )}
    </div>
  );
}

Home.layout = IndexLayout;
