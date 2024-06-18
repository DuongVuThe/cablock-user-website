import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="lg:grid lg:grid-cols-[16rem_1fr] block h-full lg:gap-12">
      <SideNavigation />

      <div>{children}</div>
    </div>
  );
}
