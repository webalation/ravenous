const apiKey = 'GJD6QX3OezZcDsYUGsMdz6ckyyHT7PqvXjNROw3RxVkRpM1VVASDJnDH6Vme3cNNDA6lEPrWTNb2LcBoNvHj2UbDb1ulFAEAVe7vKfI5aUtjByzdoDI54llJH_evXnYx';

const Yelp = {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			return	jsonResponse.businesses
					? jsonResponse.businesses.map(business => {
						return {
							id: business.id,
							imageSrc: business.image_url,
							name: business.name,
							address: business.location.address,
							city: business.location.city,
							state: business.location.state,
							zipCode: business.location.zip_code,
							category: business.categories[0].title,
							rating: business.rating,
							reviewCount: business.review_count
						}
					})
					:
		});
	}
}

export default Yelp;