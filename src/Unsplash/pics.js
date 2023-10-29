import axios from "axios";

const Unsplash = async(term) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=2&per_page=30`, {
        headers: {
            Authorization: "Client-ID jnL-jP9N8PGq07W2t9LOjM-5vTtAdinxQUJbJKCBOOg",
        },
        params: {
            query:term,
        }
    });
    return response.data.results;
}

export default Unsplash;
