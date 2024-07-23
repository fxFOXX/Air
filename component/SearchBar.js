// SearchBar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
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
});

export default SearchBar;
