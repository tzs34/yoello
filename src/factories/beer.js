class Beer {
  constructor({ abv, id, image_url, description, foodpairing, name, tagline }) {
    this.abv = abv;
    this.id = id;
    this.description = description;
    this.id = id;
    this.imageurl = image_url;
    this.foodpairing = foodpairing;
    this.name = name;
    this.tagline = tagline;
  }

  calculateProof(multiplicationFactor) {
    let proof = this.abv * multiplicationFactor;
    return `${proof}%`;
  }
}

export default Beer;
