export interface Destination {
  id: number;
  title: string;
  image: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  duration: string;
  startingPrice: number;
}

export const indianDestinations: Destination[] = [
  {
    id: 1,
    title: "Rajasthan Heritage Tour",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    description: "Experience the royal heritage of Rajasthan through its magnificent palaces and forts",
    highlights: ["Amber Fort, Jaipur", "Mehrangarh Fort, Jodhpur", "City Palace, Udaipur", "Desert Safari, Jaisalmer"],
    bestTimeToVisit: "October to March",
    duration: "7 Days",
    startingPrice: 45000
  },
  {
    id: 2,
    title: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    description: "Cruise through serene backwaters and experience Kerala's natural beauty",
    highlights: ["Alleppey Houseboat Stay", "Munnar Tea Gardens", "Kovalam Beach", "Ayurvedic Spa"],
    bestTimeToVisit: "September to March",
    duration: "5 Days",
    startingPrice: 35000
  },
  {
    id: 3,
    title: "Varanasi Spiritual Journey",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
    description: "Immerse yourself in the spiritual heart of India",
    highlights: ["Ganga Aarti", "Morning Boat Ride", "Temple Tours", "Cultural Performances"],
    bestTimeToVisit: "October to March",
    duration: "3 Days",
    startingPrice: 25000
  },
  {
    id: 4,
    title: "Ladakh Adventure",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    description: "Experience the breathtaking landscapes of the Himalayas",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Leh Palace"],
    bestTimeToVisit: "June to September",
    duration: "8 Days",
    startingPrice: 55000
  },
  {
    id: 5,
    title: "Goa Beach Retreat",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871",
    description: "Relax on pristine beaches and enjoy vibrant nightlife",
    highlights: ["Calangute Beach", "Old Goa Churches", "Spice Plantations", "Water Sports"],
    bestTimeToVisit: "November to February",
    duration: "4 Days",
    startingPrice: 30000
  },
  {
    id: 6,
    title: "Taj Mahal & Golden Triangle",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    description: "Explore India's most iconic monuments and cultural heritage",
    highlights: ["Taj Mahal", "Amber Fort", "Qutub Minar", "Fatehpur Sikri"],
    bestTimeToVisit: "October to March",
    duration: "6 Days",
    startingPrice: 40000
  }
];