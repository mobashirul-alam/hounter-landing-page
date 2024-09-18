import Article from "./components/Article/Article";
import Banner from "./components/Banner/Banner";
import FeaturedHouse from "./components/FeaturedHouse/FeaturedHouse";
import HouseTour from "./components/HouseTour/HouseTour";
import Reviews from "./components/Reviews/Reviews";
import Subscription from "./components/Subscription/Subscription";

export default function Home() {
    return (
        <section>
            <div>
                <Banner />
                <FeaturedHouse />
                <HouseTour />
                <Reviews />
                <Article />
                <Subscription />
            </div>
        </section>
    );
}
