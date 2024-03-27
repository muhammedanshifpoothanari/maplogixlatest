import { AddALoad } from "@/components/addALoad"
import { AddATruck } from "@/src/components/addATruck"
import { CreateMyProfile } from "@/src/components/createProfile"
import { EditMyProfile } from "@/src/components/editProfile"
import { Footer } from "@/src/components/footer"
import { MyLoads } from "@/src/components/myLoads"
import { Nav } from "@/src/components/nav"

const MyLoad = () => {
    return (
        <div>
            <Nav />
              <CreateMyProfile />
            <Footer />  
        </div>
    )
}

export default  MyLoad;