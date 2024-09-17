import Banner from "./components/Banner/Banner";
import FeaturedHouse from "./components/FeaturedHouse/FeaturedHouse";
import Subscription from "./components/Subscription/Subscription";

export default function Home() {
    return (
        <section>
            <div>
                <Banner />
                <FeaturedHouse />
                <Subscription />
            </div>
        </section>
    );
}
