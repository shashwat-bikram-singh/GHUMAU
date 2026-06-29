export const destinations = [
  {
    id: 'd1',
    name: 'Pokhara',
    category: 'Mid',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
    description: 'The tourism capital of Nepal, known for its tranquil lakes, spectacular adventure sports, and stunning views of the Annapurna range.',
    rating: 4.8,
    reviews: 1240,
    pricePerDay: '$40',
    activities: ['Paragliding', 'Boating', 'Hiking', 'Caving', 'Zip-lining'],
    mustVisit: [
      { name: 'Phewa Lake & Tal Barahi Temple', desc: 'A beautiful lake with a unique two-story pagoda temple situated on a small island in the center.', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg' },
      { name: 'Sarangkot Hill', desc: 'The premier spot for witnessing spectacular Himalayan sunrises and taking off for paragliding.', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Paragliding_in_Pokhara.jpg' },
      { name: 'World Peace Pagoda (Shanti Stupa)', desc: 'A white Buddhist dome pagoda situated on Anadu Hill offering panoramic views of the lake and city.', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Santi_Stupa_Pokhara_2018.jpg' },
      { name: 'Gupteshwor Mahadev Cave & Davis Falls', desc: 'A sacred cave containing a Shiva lingam, located directly opposite the dramatic Davis Falls cascade.', image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Devi%27s_Falls_Pokhara_Nepal.jpg' },
      { name: 'International Mountain Museum', desc: 'A museum dedicated to the history of mountaineering, Nepalese peaks, and the mountain people.', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/International_Mountain_Museum_Pokhara.jpg' }
    ],
    stays: [
      { name: 'Fish Tail Lodge', type: 'Heritage Lodge', price: '$120/night', image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/World_Famous_%27Fish_Tail_Lodge%27_hotel_in_Pokhara..jpg' },
      { name: 'Temple Tree Resort & Spa', type: 'Boutique Resort', price: '$85/night', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/New-pokhara-lodge.jpg' },
      { name: 'Hotel Barahi Lakeside', type: 'Luxury Hotel', price: '$95/night', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600' },
      { name: 'Waterfront Resort', type: 'Mid-Range Hotel', price: '$65/night', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
      { name: 'Sarangkot Mountain Lodge', type: 'Luxury Lodge', price: '$180/night', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600' }
    ],
    dining: [
      { name: 'Moondance Restaurant', type: 'Continental & Italian', specialty: 'Lemon Cheesecake & Pizzas', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600' },
      { name: 'Busy Bee Cafe', type: 'Pub & Dining', specialty: 'Live Music & Local Beer with Pizzas', image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=600' },
      { name: 'OR2K Pokhara', type: 'Vegetarian & Middle Eastern', specialty: 'Hummus Platters & Mint Lemonade', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600' },
      { name: 'Fresh Elements Restaurant', type: 'Fine Casual', specialty: 'Gourmet Pastas & Salads', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600' },
      { name: 'Himalayan Java Pokhara', type: 'Specialty Cafe', specialty: 'Local Single-Origin Espresso & Bakery', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600' }
    ],
    reviewsList: [
      { author: 'Michael B.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', rating: 5, date: 'October 12, 2026', title: 'Stunning Lakeside Experience', content: 'Boating on Phewa Lake and watching the sunset from the Peace Pagoda is unforgettable. Moondance had the best pizzas in Nepal.' },
      { author: 'Jessica L.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', rating: 5, date: 'November 20, 2026', title: 'Flew over Phewa!', content: 'Paragliding from Sarangkot was breathtaking. Highly recommend Fish Tail Lodge for staying.' }
    ]
  },
  {
    id: 'd2',
    name: 'Kathmandu Valley',
    category: 'Low',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg',
    description: 'The vibrant capital city, rich in history, ancient temples, bustling markets, and timeless culture.',
    rating: 4.6,
    reviews: 2150,
    pricePerDay: '$20',
    activities: ['Temple Tours', 'Shopping', 'Street Food', 'Cultural Walks', 'Artisan Workshops'],
    mustVisit: [
      { name: 'Boudhanath Stupa', desc: 'One of the largest spherical stupas in the world and the spiritual focal point of Tibetan Buddhism in Nepal.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg' },
      { name: 'Pashupatinath Temple', desc: 'A sacred and expansive Hindu temple complex dedicated to Lord Shiva on the banks of the Bagmati River.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Pashupatinath_Temple-2020.jpg' },
      { name: 'Swayambhunath Stupa (Monkey Temple)', desc: 'An ancient hilltop religious complex with a golden spire and hundreds of resident monkeys.', image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Swayambhunath_2018.jpg' },
      { name: 'Patan Durbar Square', desc: 'A marvel of Newari architecture, showcasing palaces, courtyard temples, and the Patan Museum.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Durbar_Square_Patan_2013.jpg' },
      { name: 'Garden of Dreams', desc: 'A beautifully restored neo-classical historical garden located at the entrance to Thamel.', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Garden_of_Dreams-02-Eingangspavillon-2014-gje.jpg' }
    ],
    stays: [
      { name: "Dwarika's Hotel", type: 'Luxury Heritage', price: '$180/night', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Kathmandu-Hotel-06-Kantipur_Temple_House-Gartenfront-2014-gje.jpg' },
      { name: 'Yak & Yeti Hotel', type: '5-Star Luxury Heritage', price: '$150/night', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lights_on_Lal_Darbar.jpg' },
      { name: 'Hotel Shanker', type: 'Palace Heritage Hotel', price: '$90/night', image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Shanker.jpg' },
      { name: 'Fairfield by Marriott Kathmandu', type: 'Modern Mid-Range', price: '$75/night', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600' },
      { name: 'Mulberry Hotel Thamel', type: 'Boutique Hotel', price: '$55/night', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600' }
    ],
    dining: [
      { name: 'Bhojan Griha', type: 'Traditional Newari', specialty: 'Multi-course Organic Thali & Folk Dance', image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Traditional_Nepali_Thali.jpg' },
      { name: 'Fire & Ice Pizzeria', type: 'Italian Cafe', specialty: 'Authentic Wood-fired Pizzas & Gelato', image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Wood-fired_Pizza_Oven_at_Baronessa_Italian_Restaurant.jpg' },
      { name: 'Rosemary Kitchen Thamel', type: 'Fusion Dining', specialty: 'Spiced Organic Chicken & Wine', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600' },
      { name: 'Thamel Momo Hut', type: 'Local Eatery', specialty: 'Jhel Momo & Buff/Chicken Dumplings', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Momo_nepal.jpg' },
      { name: 'Kaiser Cafe Garden of Dreams', type: 'Fine Dining Oasis', specialty: 'Vienna Schnitzel & Espresso', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600' }
    ],
    reviewsList: [
      { author: 'Robert T.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', rating: 4, date: 'September 28, 2026', title: 'Deep Cultural Roots', content: 'Kathmandu is busy and chaotic but the historical temples like Patan Durbar Square and Swayambhunath make it absolutely worth it.' },
      { author: 'Emma W.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150', rating: 5, date: 'December 05, 2026', title: 'Incredible heritage!', content: "Bhojan Griha's traditional thali was delicious and authentic. Dwarika's is a masterpiece of Newari architecture." }
    ]
  },
  {
    id: 'd3',
    name: 'Everest Base Camp',
    category: 'High',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Khumbutse.jpg',
    description: 'The ultimate trekking destination, offering a challenging journey and unparalleled views of the world\'s highest peaks.',
    rating: 4.9,
    reviews: 3100,
    pricePerDay: '$120',
    activities: ['Trekking', 'Photography', 'Helicopter Tours', 'Mountaineering', 'Sherpa Culture Guiding'],
    mustVisit: [
      { name: 'Namche Bazaar', desc: 'The bustling Sherpa trading hub and capital of the Khumbu region, set in a horseshoe-shaped mountain bowl.', image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Looking_down_to_Namche_Bazar.jpg' },
      { name: 'Tengboche Monastery', desc: 'The largest Buddhist monastery in the Khumbu region, famous for its grand mountain backdrop.', image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Tengboche_Monastery_2004.jpg' },
      { name: 'Kala Patthar Viewpoint', desc: 'A high-altitude ridge at 5,644 m offering close-up panoramic views of Mt. Everest and Lhotse.', image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Kala_Patthar_and_Mount_Everest.jpg' },
      { name: 'Khumbu Glacier & Icefall', desc: 'The highest glacier in the world, located right next to the Everest Base Camp tents.', image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Khumbu_Icefall_2003.jpg' },
      { name: 'Sagarmatha National Park Visitor Centre', desc: 'Exhibits detailing Sherpa culture, mountaineering history, and alpine flora/fauna.', image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Everest_from_Sagarmatha_National_Park.jpg' }
    ],
    stays: [
      { name: 'Hotel Everest View Syangboche', type: 'Luxury High-Altitude', price: '$220/night', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600' },
      { name: 'Yeti Mountain Home Namche', type: 'Luxury Sherpa Lodge', price: '$160/night', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600' },
      { name: 'Khumbu Lodge Namche', type: 'Classic Teahouse', price: '$40/night', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600' },
      { name: 'Riverview Lodge Phakding', type: 'Comfort Teahouse', price: '$35/night', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600' },
      { name: 'Tengboche Guesthouse', type: 'Simple Trekking Lodge', price: '$25/night', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600' }
    ],
    dining: [
      { name: 'Namche Bakery & Cafe', type: 'Bakery & Coffee', specialty: 'Hot Apple Pie & Fresh Espresso', image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600' },
      { name: 'Cafe de 8848', type: 'Trekker Café', specialty: 'Illy Coffee & Chocolate Brownies', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600' },
      { name: 'Hermann Helmers Bakery Namche', type: 'German Bakery', specialty: 'Yak Cheese Sandwiches', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600' },
      { name: 'Sherpa Bar & Café', type: 'Local Pub', specialty: 'Local Sherpa Stew (Shyakpa) & Warm Beer', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600' }
    ],
    reviewsList: [
      { author: 'Elena R.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150', rating: 5, date: 'October 25, 2026', title: 'Top of the World', content: 'A challenging but deeply fulfilling trek. The views of Everest from Kala Patthar were magnificent. Everest View Hotel is a stunning luxury oasis.' },
      { author: 'Thomas D.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150', rating: 5, date: 'November 15, 2026', title: 'Incredible Sherpa culture', content: 'Loved visiting Namche Bazaar and the Tengboche Monastery. The apple pie at Namche Bakery tasted like heaven after days of trekking!' }
    ]
  },
  {
    id: 'd4',
    name: 'Chitwan National Park',
    category: 'Mid',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_(Rhinoceros_unicornis)_6.jpg',
    description: 'A biodiverse sanctuary offering jungle safaris, bird watching, and a chance to spot one-horned rhinos and Bengal tigers.',
    rating: 4.7,
    reviews: 890,
    pricePerDay: '$60',
    activities: ['Jungle Safari', 'Canoeing', 'Bird Watching', 'Tharu Cultural Dance', 'Elephant Care Tours'],
    mustVisit: [
      { name: 'Rapti River Canoe Ride', desc: 'A peaceful boat glide in a hand-carved wooden canoe to spot marsh mugger crocodiles.', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Rafting_in_Trishuli_River%2C_Nepal-3087.jpg' },
      { name: 'Sauraha Tharu Culture House', desc: 'An evening showcase of energetic local Tharu stick dancing and drumming traditions.', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Tharu_Folk_dance.jpg' },
      { name: 'Bishazari Tal (20,000 Lakes)', desc: 'A scenic wetland system providing habitats for migratory birds and wild deer.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Chitwan_swamp.jpg' },
      { name: 'Elephant Breeding Center', desc: 'A preservation center established to protect and raise endangered elephant calves.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Elephant_Breeding_Center_Chitwan.jpg' },
      { name: 'Jungle Walk & Tiger Tracking', desc: 'Guided walks through dense sal forests led by experienced wildlife naturalists.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Indian_rhinoceros_%28Rhinoceros_unicornis%29_6.jpg' }
    ],
    stays: [
      { name: 'Barahi Jungle Lodge', type: 'Luxury Safari Lodge', price: '$110/night', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600' },
      { name: 'Jagatpur Lodge (KGH Group)', type: 'Boutique River Lodge', price: '$120/night', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600' },
      { name: 'Kasara Resort', type: 'Luxury Villa Resort', price: '$130/night', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600' },
      { name: 'Landmark Forest Park Sauraha', type: 'Safari Resort', price: '$75/night', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600' },
      { name: 'Green Mansions Jungle Resort', type: 'Eco Resort', price: '$65/night', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600' }
    ],
    dining: [
      { name: 'Jalapeño Restaurant Sauraha', type: 'Multi-Cuisine', specialty: 'Tandoori Chicken & Sizzlers', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600' },
      { name: 'Friends Café Sauraha', type: 'Trekker Café', specialty: 'Organic Salads & Nepalese Filter Coffee', image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600' },
      { name: "KC's Restaurant and Bar", type: 'Jungle Pub & Grill', specialty: 'Wood-fired Pizzas & Local Trout', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600' },
      { name: 'Tharu Cuisine House', type: 'Authentic Local', specialty: 'Ghunghil (Snails) & Tharu Duck Curry', image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg' }
    ],
    reviewsList: [
      { author: 'Sarah J.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150', rating: 5, date: 'October 18, 2026', title: 'Saw a wild rhino!', content: 'Absolutely incredible! We saw a rhino from our canoe ride, and later tracked elephant tracks. Kasara resort is gorgeous.' },
      { author: 'David C.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', rating: 4, date: 'November 02, 2026', title: 'Great jungle experience', content: "The Tharu stick dance was a nice cultural touch. KC's bar in Sauraha has excellent trout fish." }
    ]
  },
  {
    id: 'd5',
    name: 'Lumbini',
    category: 'Low',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/BRP_Lumbini_Mayadevi_temple.jpg',
    description: 'The birthplace of Lord Buddha and a UNESCO World Heritage site featuring tranquil monastic zones and ancient ruins.',
    rating: 4.5,
    reviews: 750,
    pricePerDay: '$25',
    activities: ['Meditation', 'Cycling', 'Historical Tours', 'Monastery Visits', 'Peace Sanctuary Walk'],
    mustVisit: [
      { name: 'Mayadevi Temple & Sacred Garden', desc: 'The exact historical birth spot of Siddhartha Gautama, featuring the Marker Stone and Ashoka Pillar.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/BRP_Lumbini_Mayadevi_temple.jpg' },
      { name: 'World Peace Pagoda', desc: 'A stunning white dome peace pagoda built by Japanese Buddhists overlooking the Lumbini canal.', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/World_Peace_Pagoda_Lumbini_Nepal.jpg' },
      { name: 'Royal Thai Buddhist Monastery', desc: 'A magnificent monastery built in the traditional Thai style using white marble.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Thai_monastery_in_Lumbini.jpg' },
      { name: 'German Tara Foundation Monastery', desc: 'A highly decorated Tibetan-style monastery featuring beautiful mural artwork.', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Lumbini_monasteries.jpg' },
      { name: 'Lumbini Crane Sanctuary', desc: 'A protected wetland sanctuary preserving the Sarus Crane and local bird species.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Sarus_cranes.jpg' }
    ],
    stays: [
      { name: 'Hokke Lumbini Hotel', type: 'Japanese Heritage Hotel', price: '$80/night', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600' },
      { name: 'Hotel Kasai', type: 'Japanese Luxury Hotel', price: '$90/night', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600' },
      { name: 'Lumbini Buddha Garden Resort', type: 'Eco-Resort', price: '$45/night', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600' },
      { name: 'Hotel Redsun', type: 'Modern Mid-Range', price: '$35/night', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600' },
      { name: 'Hotel Lumbini Palace', type: 'Budget Guesthouse', price: '$22/night', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600' }
    ],
    dining: [
      { name: 'Lotus Restaurant Hokke', type: 'Japanese & Local', specialty: 'Traditional Bento Box & Tempura', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600' },
      { name: 'Three Vision Restaurant', type: 'Indian & Continental', specialty: 'Veg Biryani & Butter Naan', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600' },
      { name: 'Buddha View Restaurant', type: 'Local Diner', specialty: 'Simple Veg Thali & Lassi', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600' },
      { name: 'Lumbini Sanctuary Cafe', type: 'Organic Café', specialty: 'Green Salads & Chamomile Tea', image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600' }
    ],
    reviewsList: [
      { author: 'Sophia K.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', rating: 4, date: 'September 12, 2026', title: 'Serene Birthplace', content: 'Very quiet and peaceful monastic zone. Walking around Mayadevi Temple and Ashoka Pillar felt surreal. Rent a bicycle to explore all monasteries.' }
    ]
  },
  {
    id: 'd6',
    name: 'Mustang',
    category: 'High',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Jharkot_Village-Upper_Mustang_Trek-1281.jpg',
    description: 'A mystical and arid region extending into the Tibetan plateau, famous for its ancient caves, Muktinath temple, and unique culture.',
    rating: 4.9,
    reviews: 420,
    pricePerDay: '$150',
    activities: ['Off-road Jeep Drive', 'Trekking', 'Cultural Encounters', 'Photography', 'Ancient Cave Exploration'],
    mustVisit: [
      { name: 'Muktinath Temple', desc: 'A sacred pilgrimage temple for both Hindus and Buddhists, featuring 108 water spouts.', image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Muktinath_temple.jpg' },
      { name: 'Kagbeni Village', desc: 'A medieval gateway village with mud-brick homes and a dramatic windswept Kali Gandaki gorge.', image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Kagbeni_village_Nepal.jpg' },
      { name: 'Lo Manthang Walled City', desc: 'The ancient capital of the Kingdom of Lo, surrounded by massive earthen defensive walls.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Jharkot_Village-Upper_Mustang_Trek-1281.jpg' },
      { name: 'Red Cliffs of Dhakmar', desc: 'Stunning crimson clay cliffs backdrop to historical Tibetan monasteries.', image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Dhakmar_cliffs_Mustang.jpg' },
      { name: 'Jhong Sky Caves', desc: 'Ancient multi-story man-made caves carved into vertical cliffs near Chhoser.', image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Jhong_Caves_Mustang.jpg' }
    ],
    stays: [
      { name: 'Shinta Mani Mustang', type: 'Ultra-Luxury Lodge', price: '$450/night', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600' },
      { name: 'Moksha Mustang Jomsom', type: 'Premium Boutique', price: '$120/night', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600' },
      { name: 'Jomsom Mountain Resort', type: 'Heritage Lodge', price: '$90/night', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600' },
      { name: 'Hotel Royal Mustang Lo Manthang', type: 'Tibetan Heritage', price: '$50/night', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600' },
      { name: 'Jharkot Guesthouse', type: 'Basic Tea House', price: '$20/night', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600' }
    ],
    dining: [
      { name: "Kagbeni Yak Donald's", type: 'Local Diner', specialty: 'Yak Burgers & Local Seabuckthorn Juice', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600' },
      { name: 'Jomsom Apple Bakery', type: 'Bakery Cafe', specialty: 'Mustang Apple Pie & Apple Cider', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600' },
      { name: 'New Mustang Guest House Restaurant', type: 'Tibetan Diner', specialty: 'Thukpa & Steamed Yak Momos', image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600' },
      { name: 'Lo Manthang Tea House', type: 'Tibetan Tavern', specialty: 'Butter Tea & Tsampa porridge', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600' }
    ],
    reviewsList: [
      { author: 'Nathan G.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', rating: 5, date: 'October 30, 2026', title: 'Mustang is mystical', content: 'Lo Manthang felt like traveling back in time. The Jhong caves are unbelievable, and Kagbenis Yak Burgers were surprisingly good.' }
    ]
  },
  {
    id: 'd7',
    name: 'Bhaktapur',
    category: 'Low',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg',
    description: 'An ancient Newar city in the east corner of the Kathmandu Valley, renowned for its spectacular Durbar Square, pottery traditions, and unique curd called Juju Dhau.',
    rating: 4.7,
    reviews: 680,
    pricePerDay: '$25',
    activities: ['Pottery Classes', 'Temple Tours', 'Cultural Walk', 'Tasting Juju Dhau', 'Woodcarving Workshops'],
    mustVisit: [
      { name: 'Bhaktapur Durbar Square', desc: 'A royal square displaying stunning temples, palaces like the 55-Window Palace, and the Golden Gate.', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg' },
      { name: 'Nyatapola Temple', desc: 'A five-story pagoda temple, the tallest temple in Nepal, dedicated to goddess Siddhi Lakshmi.', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Nyatapola_Temple_Bhaktapur.jpg' },
      { name: 'Dattatreya Square', desc: 'An ancient square home to the Peacock Window, a marvel of woodcarving history.', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Dattatreya_Square_Bhaktapur.jpg' },
      { name: 'Pottery Square', desc: 'A traditional clay firing and turning plaza where master potters spin clay wheels daily.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bhaktapur_pottery_square.jpg' }
    ],
    stays: [
      { name: 'Hotel Heritage Bhaktapur', type: 'Boutique Heritage', price: '$75/night', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600' },
      { name: 'Peacock Guest House', type: 'Newari Wooden Guesthouse', price: '$40/night', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600' },
      { name: 'Shiva Guest House', type: 'Standard Guesthouse', price: '$30/night', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600' },
      { name: 'Golden Gate Guest House', type: 'Budget Heritage', price: '$24/night', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/View_of_Bhaktapur_Durbar_Square.jpg' },
      { name: 'Milla Guesthouse', type: 'Modern Bed & Breakfast', price: '$55/night', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' }
    ],
    dining: [
      { name: 'Nyatapola Restaurant', type: 'Newari Rooftop', specialty: 'Samay Baji Set & Egg Bara', image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Traditional_Nepali_Thali.jpg' },
      { name: 'Pagoda Chinese & Local Restaurant', type: 'Multi-Cuisine', specialty: 'Sweet Juju Dhau Dessert & Momos', image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/King_Curd_or_Jujudhau_making_at_Bhaktapur_Nepal.jpg' },
      { name: 'Golden Gate Rooftop Restaurant', type: 'Panoramic Dining', specialty: 'Chicken Sizzlers & Nepali Thali', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600' },
      { name: 'Cafe Beyond', type: 'Craft Cafe', specialty: 'Pour-over coffee & Chocolate waffles', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600' }
    ],
    reviewsList: [
      { author: 'Olivia P.', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', rating: 5, date: 'September 15, 2026', title: 'Medieval Masterpiece', content: 'Bhaktapur was the highlight of my trip. The details in the woodcarving of the Peacock Window and Nyatapola temple are stunning. You must try the local Juju Dhau curd!' }
    ]
  },
  {
    id: 'd8',
    name: 'Janakpur',
    category: 'Low',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Janaki_Temple_Janakpur-Janakpur030315_MG_36680059.jpg',
    description: 'A historical and religious city of Nepal, famous as the birthplace of Goddess Sita and home to the grand marble Janaki Mandir.',
    rating: 4.6,
    reviews: 450,
    pricePerDay: '$20',
    activities: ['Janaki Mandir Visit', 'Mithila Art Tour', 'Pond Walks', 'Local Sweets Tasting', 'Mithila Ceramic Class'],
    mustVisit: [
      { name: 'Janaki Temple (Janaki Mandir)', desc: 'A grand Hindu temple built in the Mughal-Rajput artistic style, dedicated to Goddess Sita.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Janaki_Temple_Janakpur-Janakpur030315_MG_36680059.jpg' },
      { name: 'Ram Temple (Ram Mandir)', desc: 'The oldest pagoda temple in Janakpur built by Gorkha commanders in the 17th century.', image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Ram_Mandir_Janakpur.jpg' },
      { name: 'Ganga Sagar Pond', desc: 'A holy bathing pond where elaborate Ganga Aarati prayer rituals are performed every evening.', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ganga_Sagar_Janakpur.jpg' },
      { name: 'Mithila Art Center', desc: 'A cooperative showcase of unique, colourful Mithila folk paintings made by local women.', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Mithila_paintings.jpg' }
    ],
    stays: [
      { name: 'Sitasaran Hotel', type: 'Comfort Hotel', price: '$45/night', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600' },
      { name: 'Hotel Rajdurbar & Resort', type: 'Luxury Resort', price: '$55/night', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
      { name: 'Hotel Welcome & Lodge', type: 'Budget Lodge', price: '$18/night', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600' },
      { name: 'Hotel Rama', type: 'Standard Guesthouse', price: '$25/night', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600' },
      { name: 'Hotel Sita', type: 'Standard Guesthouse', price: '$22/night', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600' }
    ],
    dining: [
      { name: 'Mithila Sweets & Thali', type: 'Local Sweets & Meals', specialty: 'Janakpur Lassi, Malpuwa & Veg Thali', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600' },
      { name: 'Janaki Food Plaza', type: 'Fast Casual', specialty: 'Samosa Chaat & Paneer Tikka', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600' },
      { name: 'Ram Mandir Sweet Stall', type: 'Street Food', specialty: 'Fresh Jalebi & Rabri', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600' },
      { name: 'Mithila Local Diner', type: 'Authentic Madheshi', specialty: 'Rice, Lentil Soup & Taro leaf curry', image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Nepali_dal-bhat-tarkari.jpg' }
    ],
    reviewsList: [
      { author: 'Rahul S.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', rating: 4, date: 'October 12, 2026', title: 'Historic religious hub', content: 'Janaki Mandir is absolute poetry in marble. The evening Aarati prayer ceremony at Ganga Sagar pond was highly spiritual and moving.' }
    ]
  },
  {
    id: 'd9',
    name: 'Bandipur',
    category: 'Mid',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_houses_in_Bandipur.jpg',
    description: 'A hilltop settlement with beautifully preserved traditional Newari architecture, offering a quiet retreat and spectacular mountain vistas.',
    rating: 4.8,
    reviews: 310,
    pricePerDay: '$35',
    activities: ['Village Walk', 'Siddha Gufa Caving', 'Thani Mai Viewpoint', 'Traditional Dining', 'Silk Farm Visit'],
    mustVisit: [
      { name: 'Bandipur Bazaar Street', desc: 'A preserved pedestrian Newari stone paved lane lined with 18th-century tier-roofed merchant homes.', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_houses_in_Bandipur.jpg' },
      { name: 'Siddha Cave (Siddha Gufa)', desc: 'The largest stalactite cave in Nepal, reached via a beautiful jungle walk.', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Siddha_Cave_Bandipur.jpg' },
      { name: 'Thani Mai Temple Hill', desc: 'A mountaintop temple ridge offering breathtaking 360-degree views of sunrises over the Himalayas.', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Thani_Mai_Temple_Hill.jpg' },
      { name: 'Tundikhel Lookout', desc: 'A large flat green ridge offering a spectacular vista of the Marshyangdi river valley.', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Marshyangdi_River_Valley.jpg' }
    ],
    stays: [
      { name: 'The Old Inn Bandipur', type: 'Heritage Mansion Boutique', price: '$40/night', image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Old_houses_in_Bandipur.jpg' },
      { name: 'Gaun Ghar Hotel', type: 'Traditional Inn', price: '$35/night', image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600' },
      { name: 'Bandipur Mountain Resort', type: 'Scenic Resort', price: '$55/night', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600' },
      { name: 'Hotel Heritage Bandipur', type: 'Boutique Hotel', price: '$32/night', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600' },
      { name: 'Three Mountain Lodge', type: 'Eco lodge', price: '$45/night', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600' }
    ],
    dining: [
      { name: 'Bandipur Organic Cafe', type: 'Organic Café', specialty: 'Drip Coffee & Local Honey Pancakes', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600' },
      { name: 'Falcha Dining', type: 'Newari Fusion', specialty: 'Choila (Spiced Meat) & Rice Wine', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600' },
      { name: 'Keerat Cafe Bandipur', type: 'Continental', specialty: 'Vegetarian Pastas & Hot Chocolate', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600' },
      { name: 'Samay Baji Local Tavern', type: 'Traditional Diner', specialty: 'Potato salad (Alu Dum) & Newar sets', image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Traditional_Nepali_Thali.jpg' }
    ],
    reviewsList: [
      { author: 'Liam M.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150', rating: 5, date: 'October 15, 2026', title: 'Lovely Hill Station', content: 'Walking down Bandipur Bazaar felt like a fairy tale. The Newari hospitality at Gaun Ghar was warm, and the view from Tundikhel is serene.' }
    ]
  }
];

export const savedTrips = [
  {
    id: 't1',
    destination: 'Pokhara Weekend Escape',
    date: 'Oct 12 - Oct 15, 2026',
    status: 'Upcoming',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Phewa_lake%2C_Pokhara.jpg',
  },
  {
    id: 't2',
    destination: 'Kathmandu Heritage Walk',
    date: 'Nov 05 - Nov 07, 2026',
    status: 'Planned',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Boudhanath_stupa_%2C_Kathmandu%2C_Nepal.jpg',
  }
];
