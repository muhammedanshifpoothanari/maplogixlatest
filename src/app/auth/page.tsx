
import { Nav } from "@/src/components/nav"
import { DirectoryCard } from "@/src/components/directoryCard"
import { FeatureCard } from "@/src/components/featureCard"
import { LoadCard } from "@/src/components/loadCard"
import { TruckCard } from "@/src/components/truckCard"
import { Footer } from "@/src/components/footer"
import { SearchBox } from "@/src/components/searchBox"
import { Banner } from "@/src/components/banner"
import { MarketPlaceBanner } from "@/src/components/marketPlaceBanner"
import { MarketPlaceListing } from "@/src/components/marketPlaceListing"
import { AuthForm } from "@/src/components/authForm"
import { ProfileHeader } from "@/src/components/profileHeader"
// import { BusinessCardModal } from "@/src/components/"
import { ProfileAnalyticsAndInfo } from "@/src/components/profileAnalyticsAndInfo"
import { FleetAndPaymentInfo } from "@/src/components/fleetAndPaymentInfo"
import { MaterialAnsOperatingStateInfo } from "@/src/components/materialAnsOperatingStateInfo"
import { MyTrucks } from "@/src/components/myTruck"
import { MyLoads } from "@/src/components/myLoads"
import { AddATruck } from "@/src/components/addATruck"
import { AddALoads } from "@/src/components/addALoad"
import { EditMyProfile } from "@/src/components/editProfile"
import { Store } from '../../redux/store';
// import { Component } from "@/components/component"

const Home = () => {
    const state = Store.getState().auth;
    console.log('erfferfrefdvrfe',state,'frdffdedfserdfser');
    
    return (
        <div >
            {/* marketPlace */}
            {/* <Nav />
            <MarketPlaceBanner />
            <MarketPlaceListing />
            <Footer /> */}
            
            {/* auth Form */} 
             <AuthForm />
             {/* <Component /> */}

             {/* profile */}
             {/* <Nav />
             <ProfileHeader />
             <ProfileAnalyticsAndInfo />
             <FleetAndPaymentInfo />
             <MaterialAnsOperatingStateInfo />
             <Footer />  */}

             {/* My truck ,My load */}
             {/* <Nav /> */}
             {/* <MyLoads /> */}
             {/* <AddATruck /> */}
             {/* <AddALoad /> */}
              {/* <EditMyProfile /> */}
             {/* <Footer />   */}
             {/* <BusinessCardModal /> */}


             
        </div>
    )
}

export default Home