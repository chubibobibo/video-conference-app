/** Outlet to render child components */
import { Outlet } from "react-router-dom";
function HomeLayout() {
  return (
    <div>
      <h1>
        <Outlet />
      </h1>
    </div>
  );
}
export default HomeLayout;
