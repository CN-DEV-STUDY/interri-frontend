import MainHeader from "@/components/headers/MainHeader";
import MainFooter from "@/components/footers/MainFooter";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </div>
  );
}

export default Home;
