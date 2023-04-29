import Title from "./Title";
import {tours} from "../data";
import Tour from "./Tour";

function Tours() {
    return (
        <section className="section" id="tours">
            <Title title='featured' subTitle='tours' />

            <div className="section-center featured-center">
                {tours.map(tour => (
                    <Tour key={tour.id} {...tour} />
                ))}
            </div>
        </section>
    )
}
export default Tours