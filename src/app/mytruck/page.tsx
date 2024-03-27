import { AddATruck } from "@/src/components/addATruck"
import { Footer } from "@/src/components/footer"
import { MyTrucks } from "@/src/components/myTruck"
import { Nav } from "@/src/components/nav"

const MyTruck = () => {
    return (
        <div>
            {/* My truck ,My load */}
            <Nav />
             {/* <MyLoads /> */}
             {/* <AddATruck /> */}
             <MyTrucks />
             
              {/* <EditMyProfile /> */}
             <Footer />  
        </div>
    )
}

export default  MyTruck;