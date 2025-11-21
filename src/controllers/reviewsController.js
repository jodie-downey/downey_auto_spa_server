import axios from "axios";

export const getReviews = async (req, res) => {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

    const response = await axios.get(url);

    console.log("GOOGLE RAW RESPONSE:", response.data);
    if (!response.data.result) {
      return res.status(500).json({ message: "Failed to load reviews" });
    }

    res.json({
      name: response.data.result.name,
      rating: response.data.result.rating,
      totalReviews: response.data.result.user_ratings_total,
      reviews: response.data.result.reviews || [],
    });
  } catch (error) {
    console.error("Google Reviews Error:", error);
    res.status(500).json({ message: "Server error fetching reviews" });
  }
};
