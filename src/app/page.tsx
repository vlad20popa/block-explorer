import NavBar from "@/components/layout/NavBar";

export default function Home() {

  return (  
    <div className="flex">
      <NavBar/>
      <main className="flex min-h-screen items-center justify-between p-24"></main>
    </div>
  );
}
