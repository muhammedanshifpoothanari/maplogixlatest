import { AddALoad } from "@/components/addALoad"
import { AddATruck } from "@/src/components/addATruck"
import { EditMyProfile } from "@/src/components/editProfile"
import { Footer } from "@/src/components/footer"
import { MyLoads } from "@/src/components/myLoads"
import { Nav } from "@/src/components/nav"

const MyLoad = () => {
    return (
        <div>
           
            <Nav />
             
             
              <EditMyProfile />
             <Footer />  
        </div>
    )
}

export default  MyLoad;