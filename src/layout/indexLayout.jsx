import Sidebar from "@/components/SIdebar/IndexSidebar";
import Header from "@/components/Header/IndexHeader";
import Footer from "@/components/Footer/IndexFooter";
import { Group } from "@mantine/core";

export default function IndexLayout({ children }) {
  return (
    <div className="xl:w-[1200px] m-auto overflow-hidden h-screen">
      <Header />
      <div className="flex h-screen">
        <section className="w-full grow h-[100vh-500px]">{children}</section>
        <div className="h-screen ">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
