import Searchbar from "@/components/Searchbar";
import FolderList from "@/components/Folder/FolderList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FileList from "@/components/File/FileList";


const Home = () => {

    const { data: session } = useSession();
    const router = useRouter(); 
        
    useEffect(() => {
      // console.log('User Session', session.user)
      if(session) {
        router.push('/login')
      }
    },[session, router]) 
  return (
  <>
    <div className="homepage">
      <Searchbar/>
      <FolderList/>
      <FileList/>
    </div>
  </>    
  )
}

export default Home;