// BeachfrontScreen.js
import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import SearchBar from './SearchBar';
import Listing from './Listing';
import Category from './Category';

const { width } = Dimensions.get('window');

const BeachfrontScreen = () => {
    const beachfrontListings = [
        {
            image: require('./assets/room.jpg'),
            location: 'Malibu, USA',
            rating: '4.95',
            hostInfo: 'Stay with John - Hosting for 5 years',
            date: 'July 8 - 13',
            price: '$1500 / night',
        },
        {
            image: require('./assets/room2.jpg'),
            location: 'Miami, USA',
            rating: '4.80',
            hostInfo: 'Stay with Mike - Hosting for 3 years',
            date: 'July 10 - 15',
            price: '$1200 / night',
        },
    ];

    return (
        <ScrollView style={styles.container}>
            <SearchBar />
            <View style={styles.categoryContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categories}
                    snapToInterval={width / 4}
                    decelerationRate="fast"
                >
                    <Category
                        iconSource={require('./assets/category/beachfront.png')}
                        label="Beachfront"
                        onPress={() => { }}
                    />
                </ScrollView>
            </View>
            {beachfrontListings.map((listing, index) => (
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
    categoryContainer: {
        marginBottom: 15,
        paddingHorizontal: 1,
    },
    categories: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: width / 4,
    },
});

export default BeachfrontScreen;
