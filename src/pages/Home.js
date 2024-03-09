import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";
import Navigation from "../features/navbar/Navigation";

function Home() {
    return ( 
        <div>
            <Navigation />
            <ProductList />
        </div>
     );
}

export default Home;