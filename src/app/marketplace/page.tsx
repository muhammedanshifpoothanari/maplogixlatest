import { Footer } from "@/src/components/footer"
import { MarketPlaceBanner } from "@/src/components/marketPlaceBanner"
import { MarketPlaceListing } from "@/src/components/marketPlaceListing"
import { Nav } from "@/src/components/nav"

const Page = () => {
    return (
        <div>
             {/* marketPlace */}
            <Nav />
            <MarketPlaceBanner />
            <MarketPlaceListing />
            <Footer />
        </div>
    )
}

export default Page;