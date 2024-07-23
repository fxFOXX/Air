// Category.js
import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const Category = ({ iconSource, label, onPress }) => {
    return (
        <TouchableOpacity style={styles.category} onPress={onPress}>
            <Image source={iconSource} style={styles.categoryIcon} />
            <Text>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    category: {
        alignItems: 'center',
        width: 80,
        paddingHorizontal: 5,
    },
    categoryIcon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },
});

export default Category;
