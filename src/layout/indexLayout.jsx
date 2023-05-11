import Sidebar from "@/components/SIdebar/IndexSidebar";
import Header from "@/components/Header/IndexHeader";
import Footer from "@/components/Footer/IndexFooter";
import { Group } from "@mantine/core";

export default function IndexLayout({ children }) {
  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden h-screen">
      <Header />
      <div className="flex">
        <section className="mx-auto py-4">{children}</section>
        <div className="h-screen w-full sticky top-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
