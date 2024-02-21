import NavBar from "@/layouts/NavBar";
import BlockExplorerLayout from "@/layouts/BlockExplorerLayout";

export default function Home() {

  return (
    <div className="flex">
      <NavBar/>
      <main className="flex flex-col max-h-screen w-full overflow-x-hidden">
        <BlockExplorerLayout />
      </main>
    </div>
  );
}
