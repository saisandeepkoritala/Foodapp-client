import { useContext} from "react";
import {Link} from "react-router-dom";
import NavigationContext from "../context/Navigation";

const Home = () => {
  const { data} = useContext(NavigationContext);

    const rendered=data.map((item,i)=>{
      return <Link key={item.id} to={`/details/${item.id}`} className="link">
        <img src={item.urls.small} alt=""/>
        <p>{item.alt_description}</p>
        <p>Price - <strong>$ {item.likes}</strong></p>
      </Link>
    })

  return (
    <div className="home-main">
      <div className="features">
        <h2>Welcome to Foodie Delights</h2>
        <p>Discover a world of flavors!</p>

        <h2>Explore Diverse Cuisines</h2>
        <p>From Italian pasta to spicy Indian curries, we've got it all. Explore a wide range of international cuisines and satisfy your cravings.</p>

        <h2>Easy Ordering</h2>
        <p>Order your favorite dishes with just a few clicks. We make it simple for you to enjoy your desired meals, whether you're dining in or taking out.</p>

        <h2>Fast Delivery</h2>
        <p>We deliver your food piping hot and fresh right to your doorstep. No more waiting enjoy your meals without delay.</p>

        <h2>Ready to Tantalize Your Taste Buds?</h2>
        <p>Start your culinary adventure with Foodie Delights today!</p>
      </div>
      <div className="home">
        {rendered}
      </div>
    </div>
  );
};

export default Home;
