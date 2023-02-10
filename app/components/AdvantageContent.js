const mission = {
  title: "Our Mission",
  secTitle: "We want to build long lasting bonds with our customers",
  paragraph:
    "Our goal is to establish a long-term relationship and we understand the only way to do that is through putting effort into providing the most outstanding customer service.",
}

const experience = {
  title: "Our Experience",
  secTitle: "20 year plus of industry experience",
  paragraph:
    "After 20 years in business we've worked with many people and learned from every one of them. Utilize our network of textile experts to tackle almost any style, problem or question",
}

const efficient = {
  title: "We Are Efficient",
  secTitle: "Quick turn 3-4 week lead times",
  paragraph:
    "Our products are made in USA which means we have on demand speed. Our experience has also allowed us to optimized processes to ensure a smooth experienec for our customers",
}
const future = {
  title: "Coming Soon",
  secTitle: "Plans for the near future",
  paragraph:
    "We are continuously looking for ways to grow and expand our manufacturing network so we can provide and improve our service to our customers. We also have plans to create a retail/wholesale marketplace. ",
}

function determineContent(category) {
  if (category == "Mission") {
    return mission
  } else if (category === "Experience") {
    return experience
  } else if (category === "Efficient") {
    return efficient
  } else if (category === "Future") {
    return future
  } else {
    return mission
  }
}

export default determineContent
