// Listing.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
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
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listingText: {
        paddingLeft: 20,
    },
});

export default Listing;
