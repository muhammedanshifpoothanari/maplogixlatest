import { FleetAndPaymentInfo } from "@/src/components/fleetAndPaymentInfo"
import { Footer } from "@/src/components/footer"
import { MaterialAnsOperatingStateInfo } from "@/src/components/materialAnsOperatingStateInfo"
import { Nav } from "@/src/components/nav"
import { ProfileAnalyticsAndInfo } from "@/src/components/profileAnalyticsAndInfo"
import { ProfileHeader } from "@/src/components/profileHeader"

const Profile = () => {
    return (
        <div>
            {/* profile */}
             <Nav />
             <ProfileHeader />
             <ProfileAnalyticsAndInfo />
             {/* <FleetAndPaymentInfo /> */}
             <MaterialAnsOperatingStateInfo />
             <Footer /> 
        </div>
    )
}


export default Profile;