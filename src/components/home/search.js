import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Searchicon1 from '../../assets/icons/search';
import Bookicon1 from '../../assets/icons/book';
import { useNavigation } from '@react-navigation/native';

export default function Search1() {
    const navigation = useNavigation();

    return (
        <View style={styles.searchContainer}>
            <Searchicon1 style={styles.icon} />
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
                placeholderTextColor="grey"
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Catalog1')}
            >
                <View style={styles.bookIconContainer}>
                    <Bookicon1 />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginBottom: 10,
        marginRight: 15,
        marginTop: 10,
    },
    searchBar: {
        height: 48,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 36,
        flex: 1,
        marginLeft: 8,
        fontSize: 16,
    },
    icon: {
        position: 'absolute',
        left: 15,
        top: 12,
        width: 24,
        height: 24,
    },
    bookIconContainer: {
        marginLeft: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBox: {
        width: 50,
        height: 50,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});
