import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import Sidebar from '../components/Sidebar'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div className='flex'>
      <Sidebar />
      <div className='grid grid-cols-1 md:grid-cols-3 w-full'>
        <div className='bg-gray-200 col-span-2 p-4'>
        <Component {...pageProps} />
        </div>
        <div className="storageContainer bg-slate-300 p-4">
          <h1>storage</h1>
        </div>
      </div>
      </div>
    </SessionProvider>
  )
}