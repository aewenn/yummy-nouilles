import Hero from "../../components/Hero/Hero";
import yummyLogo from "../../assets/Yummy_logo.svg";
import yummynoodlefacade from "../../assets/images/Facade_Yummy_Noodle.png"
import yumnoodlemyfacade from "../../assets/images/Facade_Yu_Noodle_My.png"
import lesyummynouillesfacade from "../../assets/images/Facade_Les_Yummy_Nouilles.png"

const Home = () => {
    return (
        <section className="start_section">
            <Hero />
            <div className="adress">
                <img src={yummyLogo} alt="" className="logo_XL" />
                <h2 className="link-active">Nos adresses</h2>
                <article className="adress_card">
                    <img src={yummynoodlefacade} alt="" />
                    <h3>Yummy Noodle</h3>
                    <p>185 rue de Lancry</p>
                    <p>75010 Paris</p>
                </article>
                <article className="adress_card">
                    <img src={yumnoodlemyfacade} alt="" />
                    <h3>Yum Noodle My</h3>
                    <p>350 rue Saint-Guillaume</p>
                    <p>75007 Paris</p>
                </article>
                <article className="adress_card">
                    <img src={lesyummynouillesfacade} alt="" />
                    <h3>Les Yummy Nouilles</h3>
                    <p>208 rue au Maire</p>
                    <p>75003 Paris</p>
                </article>
            </div>
        </section>
    );
};

export default Home;