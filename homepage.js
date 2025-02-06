import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const HomePage = () => {
  const renderCard = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.color }]}>
      <View style={styles.cardHeader}>
        {item.flag && <Image source={item.flag} style={styles.flag} />}
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  const recommendedData = [
    { title: 'Spanish Basics', description: 'Learn the basics of Spanish.', color: '#daf6f2', flag: require('./assets/flags/spain.png') },
    { title: 'French for Beginners', description: 'Start your journey with French.', color: '#fae3d7', flag: require('./assets/flags/france.png') },
    { title: 'German Essentials', description: 'Essential German phrases and words.', color: '#dccaa8', flag: require('./assets/flags/germany.png') },
  ];

  const coursesData = [
    { title: 'Advanced Spanish', description: 'Master advanced Spanish.', color: '#d0bbcd', flag: require('./assets/flags/spain.png') },
    { title: 'Intermediate French', description: 'Improve your French skills.', color: '#fae3d7', flag: require('./assets/flags/france.png') },
    { title: 'Basic German', description: 'Basics of German language.', color: '#daf6f2', flag: require('./assets/flags/germany.png') },
  ];

  const booksData = [
    { title: 'Ebooks', description: 'A collection of digital books.', color: '#dccaa8' },
    { title: 'Audiobooks', description: 'Books available in audio format.', color: '#fae3d7' },
    { title: 'Printed Books', description: 'Traditional printed books.', color: '#d0bbcd' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topNavBar}>
        <Text style={styles.appName}>FluentBee</Text>
        <FontAwesome5 name="bell" size={24} color="black" />
        <FontAwesome5 name="bars" size={24} color="black" />
      </View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <FlatList
            data={recommendedData}
            renderItem={renderCard}
            keyExtractor={(item) => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Courses</Text>
          <FlatList
            data={coursesData}
            renderItem={renderCard}
            keyExtractor={(item) => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Books</Text>
          <FlatList
            data={booksData}
            renderItem={renderCard}
            keyExtractor={(item) => item.title}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="book" size={24} color="black" />
          <Text>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="language" size={24} color="black" />
          <Text>Translate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="user" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  card: {
    width: 220,
    height: 180,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  cardDescription: {
    fontSize: 14,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
    backgroundColor: '#f8f8f8',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomePage;