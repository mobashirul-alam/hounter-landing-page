import Article from "./components/Article/Article";
import Banner from "./components/Banner/Banner";
import FeaturedHouse from "./components/FeaturedHouse/FeaturedHouse";
import HouseTour from "./components/HouseTour/HouseTour";
import Subscription from "./components/Subscription/Subscription";

export default function Home() {
    return (
        <section>
            <div>
                <Banner />
                <FeaturedHouse />
                <HouseTour />
                <Article />
                <Subscription />
            </div>
        </section>
    );
}
