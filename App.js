import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const ExploreIcon = require('./assets/nav/search.png');
const WishlistsIcon = require('./assets/nav/wish.png');
const TripsIcon = require('./assets/nav/trip.png');
const InboxIcon = require('./assets/nav/message.png');
const ProfileIcon = require('./assets/nav/profile.png');

import filterIcon from './assets/topicons/filterIcon.png';

const { width } = Dimensions.get('window');

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      <View>
        <Text style={styles.searchText}>Where to?</Text>
        <Text style={styles.subText}>Anywhere - Any week - Add guests</Text>
      </View>
      <View style={styles.filterIconContainer}>
        <Image source={filterIcon} style={{ width: 24, height: 24 }} />
      </View>
    </View>
  );
};

const Category = ({ iconSource, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.category} onPress={onPress}>
      <Image source={iconSource} style={styles.categoryIcon} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const Listing = ({ image, location, rating, hostInfo, date, price }) => {
  return (
    <View style={styles.listing}>
      <Image source={image} style={styles.listingImage} />
      <FontAwesome5 name="heart" size={18} color="white" style={styles.favoriteIcon} />
      <View style={styles.listingInfo}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.rating}><FontAwesome5 name="star" size={14} color="gold" /> {rating}</Text>
      </View>
      <Text style={styles.listingText}>{hostInfo}</Text>
      <Text style={styles.listingText}>{date}</Text>
      <Text style={styles.listngText}>{price}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Icons');
  const scrollViewRef = useRef(null);

  const categories = [
    { iconSource: require('./assets/category/icons.png'), label: 'Icons' },
    { iconSource: require('./assets/category/beachfront.png'), label: 'Beachfront' },
    { iconSource: require('./assets/category/farm.png'), label: 'Farms' },
    { iconSource: require('./assets/category/grid.png'), label: 'Grid' },
    { iconSource: require('./assets/category/island.png'), label: 'Island' },
    { iconSource: require('./assets/category/view.png'), label: 'Views' },
    { iconSource: require('./assets/category/cabin.png'), label: 'Cabins' },
    { iconSource: require('./assets/category/luxe.png'), label: 'Luxe' },
  ];

  const listings = {
    Icons: [
      {
        image: require('./assets/icons/icon1.webp'),
        location: 'Drift off in the Up house',
        rating: '4.95',
        hostInfo: 'Hosted by Carl Fredricksen',
        date: 'May 8 - 13',
        price: 'R960 / Guest',
      },
      {
        image: require('./assets/icons/icon2.webp'),
        location: 'Train at the X-Mansion',
        rating: '4.95',
        hostInfo: 'Hosted by Jubilee',
        date: 'May 8 - 13',
        price: 'R688 per guest',
      },
      {
        image: require('./assets/icons/icon3.webp'),
        location: 'Stay in Prince`s Purple Rain house',
        rating: '4.95',
        hostInfo: 'Hosted by Wendy and Lisa',
        date: 'Coming August',
        price: '',
      },
      {
        image: require('./assets/icons/icon4.webp'),
        location: 'Go VIP with Kevin Hart',
        rating: '4.95',
        hostInfo: 'Hosted by Kevin Hart',
        date: 'Coming July',
        price: '',
      },
      {
        image: require('./assets/icons/icon5.webp'),
        location: 'Join a living room session with Doja',
        rating: '4.95',
        hostInfo: 'Hosted by Doja Cat',
        date: 'Coming October 19',
        price: '',
      },
      {
        image: require('./assets/icons/icon6.webp'),
        location: 'Make core memories with Inside Out 2',
        rating: '4.95',
        hostInfo: 'Hosted by Joy',
        date: 'Sold out',
        price: '',
      },
      {
        image: require('./assets/icons/icon7.webp'),
        location: 'Open the Olympic Games at Musee d`Orsay',
        rating: '4.95',
        hostInfo: 'Hosted by Mathieu Lehanneur',
        date: 'Sold out',
        price: '',
      },
      {
        image: require('./assets/icons/icon8.webp'),
        location: "Wake up in the Musee d'Orsay",
        rating: '4.95',
        hostInfo: 'Hosted by Mathieu Lehanneur ',
        date: 'Sold out',
        price: '',
      },
      {
        image: require('./assets/icons/icon9.webp'),
        location: 'Design your incredibles Supersuit',
        rating: '4.95',
        hostInfo: 'Hosted by Edna Mode',
        date: 'Sold out',
        price: '',
      },
      {
        image: require('./assets/icons/icon10.webp'),
        location: 'Crash at the X-Mansion',
        rating: '4.95',
        hostInfo: 'Hosted by Jubilee',
        date: 'Sold out',
        price: '',
      },
    ],







    Beachfront: [
      {
        image: require('./assets/beachfront/beach1.webp'),
        location: 'Still Bay, South Africa',
        rating: '4.95',
        hostInfo: 'Shelly Beach',
        date: 'July 19 - 30',
        price: 'R2500 / night',
      },
      {
        image: require('./assets/beachfront/beach2.webp'),
        location: 'Van Dyks Bay, South Africa',
        rating: '4.80',
        hostInfo: 'Klipgat se plaat',
        date: 'July 19 - 29',
        price: 'R1200 / night',
      },
      {
        image: require('./assets/beachfront/beach3.webp'),
        location: 'Clarendon Marine, South Africa',
        rating: '4.95',
        hostInfo: '639 Kilometers away',
        date: 'August 19 - 30',
        price: 'R2500 / night',
      },
      {
        image: require('./assets/beachfront/beach4.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Queens Beach',
        date: 'September 10 - 15',
        price: 'R5200 / night',
      },
      {
        image: require('./assets/beachfront/beach5.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.95',
        hostInfo: 'Camps Bay Beach',
        date: 'Aug 19 - 30',
        price: 'R25300 / night',
      },
      {
        image: require('./assets/beachfront/beach6.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Shelly Beach',
        date: 'Aug 6 - 11',
        price: 'R930 / night',
      },
      {
        image: require('./assets/beachfront/beach7.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.95',
        hostInfo: 'Queens Beach',
        date: 'July 19 - 30',
        price: 'R3,500 / night',
      },
      {
        image: require('./assets/beachfront/beach8.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Big Bay Beach',
        date: 'Aug 10 - 15',
        price: 'R1,200 / night',
      },
    ],




    Farms: [
      {
        image: require('./assets/farm/farm1.webp'),
        location: 'Tulbagh, South Africa',
        rating: '4.95',
        hostInfo: '98 Kilometers away',
        date: 'July 19 - 30',
        price: 'R2500 / night',
      },
      {
        image: require('./assets/farm/farm2.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: '20 Kilometers away',
        date: 'Aug 19 - 29',
        price: 'R2200 / night',
      },
      {
        image: require('./assets/farm/farm3.webp'),
        location: 'Baardskeerdersbos, South Africa',
        rating: '4.95',
        hostInfo: '130 Kilometers away',
        date: 'August 19 - 30',
        price: 'R850 / night',
      },
      {
        image: require('./assets/farm/farm4.webp'),
        location: 'Cape Winelands, South Africa',
        rating: '4.80',
        hostInfo: '129 kilometers away',
        date: 'September 12 - 15',
        price: 'R5200 / night',
      },
      {
        image: require('./assets/farm/farm5.webp'),
        location: 'Stellenbosch, South Africa',
        rating: '4.95',
        hostInfo: '37 Kilometers away',
        date: 'Aug 19 - 25',
        price: 'R1500 / night',
      },
      {
        image: require('./assets/farm/farm6.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: '14 Kilometers away',
        date: 'Aug 7 - 11',
        price: 'R3,930 / night',
      },
      {
        image: require('./assets/farm/farm7.webp'),
        location: 'Robertson, South Africa',
        rating: '4.95',
        hostInfo: '147',
        date: 'July 18 - 30',
        price: 'R1,358 / night',
      },
      {
        image: require('./assets/farm/farm8.webp'),
        location: 'ZA, South Africa',
        rating: '4.80',
        hostInfo: '66 Kilometers away ',
        date: 'Aug 10 - 15',
        price: 'R2,200 / night',
      },


      {
        image: require('./assets/farm/farm9.webp'),
        location: 'Franschhoek, South Africa',
        rating: '4.80',
        hostInfo: '68 Kilometers away ',
        date: 'Aug 10 - 15',
        price: 'R3,200 / night',
      },

      {
        image: require('./assets/farm/farm10.webp'),
        location: 'McGregor, South Africa',
        rating: '4.80',
        hostInfo: '129 Kilometers away ',
        date: 'Sep 7 - 15',
        price: 'R2,400 / night',
      },
      
      
    ],





















    
    Grid: [
      {
        image: require('./assets/grid/grid1.webp'),
        location: 'Montagu, South Africa',
        rating: '4.95',
        hostInfo: '178 Kilometers away',
        date: 'Sep 10 - 30',
        price: 'R2900 / night',
      },
      {
        image: require('./assets/grid/grid2.webp'),
        location: 'Nottingham Road, South Africa',
        rating: '4.80',
        hostInfo: '1.171 Kilometers away',
        date: 'Aug 9 - 29',
        price: 'R2200 / night',
      },
      {
        image: require('./assets/grid/grid3.webp'),
        location: 'Cape Winelands, South Africa',
        rating: '4.95',
        hostInfo: '130 Kilometers away',
        date: 'August 1 - 30',
        price: 'R1,850 / night',
      },
      {
        image: require('./assets/grid/grid4.webp'),
        location: 'Cape Winelands, South Africa',
        rating: '4.80',
        hostInfo: '89 kilometers away',
        date: 'September 1 - 6',
        price: 'R5200 / night',
      },
      {
        image: require('./assets/grid/grid5.webp'),
        location: 'Bain`s Kloof Pass, South Africa',
        rating: '5.00',
        hostInfo: '83 Kilometers away',
        date: 'Aug 19 - 25',
        price: 'R4,500 / night',
      },
      {
        image: require('./assets/grid/grid6.webp'),
        location: 'Luckhof, South Africa',
        rating: '4.80',
        hostInfo: '759 Kilometers away',
        date: 'Aug 14 - 19',
        price: 'R1,930 / night',
      },
      {
        image: require('./assets/grid/grid7.webp'),
        location: 'Montagu, South Africa',
        rating: '4.95',
        hostInfo: '147',
        date: 'Nov 18 - 30',
        price: 'R1,358 / night',
      },
      {
        image: require('./assets/grid/grid8.webp'),
        location: 'Robertson, South Africa',
        rating: '4.80',
        hostInfo: '123 Kilometers away ',
        date: 'Aug 12 - 17',
        price: 'R2,200 / night',
      },


      {
        image: require('./assets/grid/grid9.webp'),
        location: 'Montagu, South Africa',
        rating: '4.80',
        hostInfo: '68 Kilometers away ',
        date: 'Aug 7 - 12',
        price: 'R3,200 / night',
      },

      {
        image: require('./assets/grid/grid10.webp'),
        location: 'Knysna, South Africa',
        rating: '4.80',
        hostInfo: '425 Kilometers away ',
        date: 'Sep 8 - 15',
        price: 'R2,400 / night',
      },















      

    ],

    Island: [
      {
        image: require('./assets/islands/land1.webp'),
        location: 'Male, Maldives',
        rating: '4.95',
        hostInfo: '7,172 Kilometers away',
        date: 'July 19 - 30',
        price: 'R10,832 / night',
      },
      {
        image: require('./assets/islands/land2.webp'),
        location: 'Roches Noires, Mauritius',
        rating: '4.80',
        hostInfo: '4,155 Kilometers away',
        date: 'Aug 3 - 8',
        price: 'R17,298 / night',
      },
      {
        image: require('./assets/islands/land3.webp'),
        location: 'Angra dos Reis, Brazil',
        rating: '4.95',
        hostInfo: '2,000 Square Meters away',
        date: 'August 9 - 30',
        price: 'R81,501 / night',
      },
      {
        image: require('./assets/islands/land4.webp'),
        location: 'Angra dos Reis, Brazil',
        rating: '4.80',
        hostInfo: '6,000 Square meters away',
        date: 'September 12 - 15',
        price: 'R11,507 / night',
      },
      {
        image: require('./assets/islands/land5.webp'),
        location: 'Kaafu Atoll,Maldives',
        rating: '4.95',
        hostInfo: '7,256 Kilometers away',
        date: 'Aug 19 - 25',
        price: 'R12,637 / night',
      },
      {
        image: require('./assets/islands/land6.webp'),
        location: 'Rio de Janeiro, Brazil',
        rating: '4.80',
        hostInfo: '5,954 Kilometers away',
        date: 'Aug 8 - 14',
        price: 'R1,930 / night',
      },
      {
        image: require('./assets/islands/land7.webp'),
        location: 'Athuruga island, Maldives',
        rating: '4.95',
        hostInfo: '147',
        date: 'Dec 1 - 6',
        price: 'R21,358 / night',
      },
      {
        image: require('./assets/islands/land8.webp'),
        location: 'Jinja, Uganda',
        rating: '4.80',
        hostInfo: '3.3 hectares',
        date: 'Aug 2 - 7',
        price: 'R2,708 / night',
      },


      {
        image: require('./assets/islands/land9.webp'),
        location: 'Male`, Maldives',
        rating: '4.80',
        hostInfo: '7,154 Kilometers away ',
        date: 'Aug 3 - 8',
        price: 'R27,895 / night',
      },

      {
        image: require('./assets/islands/land10.webp'),
        location: 'Angra dos Reis, Brazil',
        rating: '4.80',
        hostInfo: '1 hectare',
        date: 'Sep 2 - 7',
        price: 'R72,161 / night',
      },


    ],






    Views: [
      {
        image: require('./assets/view/view1.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.95',
        hostInfo: 'Mountain views',
        date: 'July 19 - 30',
        price: 'R979 / night',
      },
      {
        image: require('./assets/view/view2.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Ocean and sea views',
        date: 'Aug 3 - 8',
        price: 'R4,298 / night',
      },
      {
        image: require('./assets/view/view3.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.95',
        hostInfo: 'Beach and sea views',
        date: 'August 9 - 30',
        price: 'R2,501 / night',
      },
      {
        image: require('./assets/view/view4.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Mountain and ocean views',
        date: 'September 12 - 15',
        price: 'R11,507 / night',
      },
      {
        image: require('./assets/view/view5.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.95',
        hostInfo: 'Mountain views',
        date: 'Aug 1 - 5',
        price: 'R2,637 / night',
      },
      {
        image: require('./assets/view/view6.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Beach and mountain views',
        date: 'Aug 8 - 14',
        price: 'R2,930 / night',
      },
      {
        image: require('./assets/view/view7.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.95',
        hostInfo: 'Beach and mountain views',
        date: 'Dec 1 - 6',
        price: 'R21,358 / night',
      },
      {
        image: require('./assets/view/view8.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Beach and mountain views',
        date: 'Aug 2 - 7',
        price: 'R20,708 / night',
      },


      {
        image: require('./assets/view/view9.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: 'Mountain and ocean views',
        date: 'Aug 3 - 8',
        price: 'R2,895 / night',
      },

      {
        image: require('./assets/view/view10.webp'),
        location: 'Cape Town, South Africa',
        rating: '4.80',
        hostInfo: '1 hectare',
        date: 'Oct 14 - 19',
        price: 'R1,161 / night',
      },


    ],





    // Add other categories and their listings here...
  };

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          contentContainerStyle={styles.categories}
          snapToInterval={width / 4}
          decelerationRate="fast"
        >
          {categories.map((category, index) => (
            <Category
              key={index}
              iconSource={category.iconSource}
              label={category.label}
              onPress={() => handleCategoryPress(category.label)}
            />
          ))}
        </ScrollView>
      </View>
      {listings[activeCategory] ? (
        listings[activeCategory].map((listing, index) => (
          <Listing
            key={index}
            image={listing.image}
            location={listing.location}
            rating={listing.rating}
            hostInfo={listing.hostInfo}
            date={listing.date}
            price={listing.price}
          />
        ))
      ) : (
        <Text>No listings available</Text>
      )}
    </ScrollView>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconSource;

            if (route.name === 'Explore') {
              iconSource = ExploreIcon;
            } else if (route.name === 'Wishlists') {
              iconSource = WishlistsIcon;
            } else if (route.name === 'Trips') {
              iconSource = TripsIcon;
            } else if (route.name === 'Inbox') {
              iconSource = InboxIcon;
            } else if (route.name === 'Profile') {
              iconSource = ProfileIcon;
            }

            return (
              <View>
                <Image source={iconSource} style={{ tintColor: color, width: size, height: size, opacity: focused ? 1 : 0.8 }} />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'grey', // Dark grey for inactive icons
        }}
      >
        <Tab.Screen name="Explore" component={HomeScreen} />
        <Tab.Screen name="Wishlists" component={HomeScreen} />
        <Tab.Screen name="Trips" component={HomeScreen} />
        <Tab.Screen name="Inbox" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '4%',
    paddingHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
  },
  filterIconContainer: {
    backgroundColor: '#eee',
    borderRadius: 15,
    padding: 5,
    marginLeft: 'auto',
  },
  categoryContainer: {
    marginBottom: 15,
    paddingHorizontal: 1,
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: width / 4,
  },
  category: {
    alignItems: 'center',
    width: width / 5,
    paddingHorizontal: 5,
  },
  categoryIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  listing: {
    marginBottom: 20,
  },
  listingImage: {
    width: '90%',
    height: 250,
    borderRadius: 10,
    alignSelf: 'center',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 40,
  },
  listingInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  location: {
    fontWeight: 'Normal',
    right: -10,
    fontSize: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    right: 12,
  },
  listingText: {
    paddingLeft: 20,
    color: 'grey'
  },
  listngText:{
    paddingLeft: 20,
    fontSize: 20,

  }
});


