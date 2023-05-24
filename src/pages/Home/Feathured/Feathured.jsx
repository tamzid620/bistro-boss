import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Fimg from "../../../assets/home/featured.jpg"
import './Feathured.css'


const Feathured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-20"> 
            <SectionTitle subHeading="Check It Out"></SectionTitle>
            <div className="md:flex justify-center items-center px-36 pt-12 pb-20 bg-slate-500 bg-opacity-60 ">
                <div>
                    <img src={Fimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi fugiat nam beatae pariatur enim veniam molestias cupiditate ipsa quidem amet iure iusto odit possimus minus, ad labore distinctio vero voluptas molestiae quisquam cumque. Esse laudantium repellendus reiciendis, necessitatibus nostrum voluptatibus impedit maiores voluptatem et temporibus error aspernatur, voluptas tempora tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Feathured;