import { Sidebar } from "@/components/sidebar"


export default function Home() {
  return (
    <div className='flex flex-row w-full h-screen'>
      <Sidebar />
      <div className='flex bg-gray-200 w-full'>Conteudo Dashboard</div>
    </div>
  )
}
