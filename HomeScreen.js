// HomeScreen.js
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

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
                <Ionicons name="filter" size={24} color="black" />
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
            <Text style={styles.listingText}>{price}</Text>
        </View>
    );
};

const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState('Icons');
    const scrollViewRef = useRef(null);
    const navigation = useNavigation();

    const categories = [
        { iconSource: require('./assets/category/icons.png'), label: 'Icons' },
        { iconSource: require('./assets/category/beachfront.png'), label: 'Beachfront', screen: 'Beachfront' },
        { iconSource: require('./assets/category/farm.png'), label: 'Farms' },
        { iconSource: require('./assets/category/grid.png'), label: 'Off-the-grid' },
        { iconSource: require('./assets/category/island.png'), label: 'Island' },
        { iconSource: require('./assets/category/view.png'), label: 'Amazing Views' },
        { iconSource: require('./assets/category/cabin.png'), label: 'Cabins' },
        { iconSource: require('./assets/category/luxe.png'), label: 'Luxe' },
    ];

    const listings = {
        Icons: [
            {
                image: require('./assets/room.jpg'),
                location: 'London, United Kingdom',
                rating: '4.95',
                hostInfo: 'Stay with Lena - Hosting for 8 years',
                date: 'May 8 - 13',
                price: 'R960 / night',
            },
            {
                image: require('./assets/room2.jpg'),
                location: 'London, United Kingdom',
                rating: '4.95',
                hostInfo: 'Stay with Lena - Hosting for 8 years',
                date: 'May 8 - 13',
                price: 'R960 / night',
            },
        ],
        // Add other categories and their listings here...
    };

    const handleCategoryPress = (category, screen) => {
        if (screen) {
            navigation.navigate(screen);
        } else {
            setActiveCategory(category);
        }
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
                            onPress={() => handleCategoryPress(category.label, category.screen)}
                        />
                    ))}
                </ScrollView>
            </View>
            {listings[activeCategory]?.map((listing, index) => (
                <Listing
                    key={index}
                    image={listing.image}
                    location={listing.location}
                    rating={listing.rating}
                    hostInfo={listing.hostInfo}
                    date={listing.date}
                    price={listing.price}
                />
            ))}
        </ScrollView>
    );
};

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
        right: 10,
    },
    listingInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingHorizontal: 10,
    },
    location: {
        fontWeight: 'bold',
        right: -10,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listingText: {
        paddingLeft: 20,
    },
});

export default HomeScreen;
