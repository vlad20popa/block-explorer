import NavBar from "@/layouts/NavBar";
import ExplorerHeader from "@/layouts/ExplorerHeader";
import Blocks from "@/components/explorer/Blocks";

export default function Home() {

  return (
    <div className="flex">
      <NavBar/>
      <main className="flex flex-col w-full">
        <ExplorerHeader/>
        <Blocks></Blocks>
      </main>
    </div>
  );
}
