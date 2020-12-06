const apiKey =
	"otr0qKVsfg9Kn0Sl-DOlHyVooG4brwDgq2OxYVJdWMFO6QiXYpz0E0b4ywECN4TboybvvhwWgVpaO6ZTnu5gvGoavdlWjdtPN1Q0Ne3A8ewbGP1pLbr57VWqsCnNX3Yx"; // Insert API key here.

const Yelp = {
	search(term, location, sortBy) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((jsonResponse) => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map((business) => ({
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count,
					}));
				}
			});
	},
};

export default Yelp;
