import NavBar from "@/layouts/NavBar";
import ExplorerHeader from "@/layouts/ExplorerHeader";
import Blocks from "@/components/explorer/Blocks";
import BlockExplorerLayout from "@/layouts/BlockExplorerLayout";

export default function Home() {

  return (
    <div className="flex">
      <NavBar/>
      <main className="flex flex-col w-full">
        <BlockExplorerLayout />
      </main>
    </div>
  );
}
