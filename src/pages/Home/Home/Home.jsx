import Banner from "../Banner/Banner";
import Categoty from "../Categoty/Categoty";
import Feathured from "../Feathured/Feathured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categoty></Categoty>
            <PopularMenu></PopularMenu>
            <Feathured></Feathured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;