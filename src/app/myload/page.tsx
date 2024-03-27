import { AddATruck } from "@/src/components/addATruck"
import { Footer } from "@/src/components/footer"
import { MyLoads } from "@/src/components/myLoads"
import { Nav } from "@/src/components/nav"
import { useRouter } from "next/navigation"

const MyLoad = () => {

    return (
        <div>
           
            <Nav />
             <MyLoads />
             
             
              {/* <EditMyProfile /> */}
             <Footer />  
        </div>
    )
}

export default  MyLoad;