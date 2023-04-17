import IndexLayout from "@/layout";

export default function Home({ videos }) {
  return (
    <div className="flex flex-col gap-10 videos h-full">
      {videos?.length
        ? videos?.map((video) => (
            <VideoCard post={video} isShowingOnHome key={video._id} />
          ))
        : // <NoResults text={`No Videos`} />'
          "asdasdasd"}
    </div>
  );
}

Home.layout = IndexLayout;
