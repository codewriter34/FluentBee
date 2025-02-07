import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const CulturalInsightsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cultural Insights</Text>
      <Text style={styles.content}>
        Learning a language is not just about words and grammar; it's also about understanding the culture. In this section, you'll find information about Spanish-speaking cultures, including traditions, customs, and more.
      </Text>

      <Text style={styles.sectionTitle}>Spanish Festivals</Text>
      <Image
        source={{ uri: 'https://www.realspanish.eu/wp-content/webp-express/webp-images/uploads/2021/02/carnaval-santa-cruz-tenerife-1536x1024.jpg.webp' }}
        style={styles.image}
      />
      <Text style={styles.imageCaption}>La Tomatina Festival in Buñol, Spain</Text>
      <Text style={styles.content}>
        Spain is renowned for its vibrant festivals that showcase its rich cultural heritage. Here are a few notable ones:
      </Text>
      <Text style={styles.subSectionTitle}>La Tomatina</Text>
      <Text style={styles.content}>
        Held annually in Buñol, La Tomatina is a famous tomato fight festival where participants throw tomatoes at each other purely for fun. The festival attracts thousands of tourists from around the world who come to enjoy the unique and messy experience.
      </Text>
      <Text style={styles.subSectionTitle}>Las Fallas</Text>
      <Text style={styles.content}>
        Celebrated in Valencia, Las Fallas is a festival that features large, elaborate sculptures made of papier-mâché, which are paraded through the city and then burned in a grand finale. The festival is a celebration of creativity and craftsmanship, with each neighborhood competing to create the most impressive sculpture.
      </Text>

      <Text style={styles.sectionTitle}>Cuisine</Text>
      <Image
        source={{ uri: 'https://www.savoredjourneys.com/wp-content/uploads/2015/03/paella-398968_1280.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.imageCaption}>Traditional Spanish Paella</Text>
      <Text style={styles.content}>
        Spanish cuisine is diverse and flavorful, reflecting the country's regional variations and history. Some iconic dishes include:
      </Text>
      <Text style={styles.subSectionTitle}>Paella</Text>
      <Text style={styles.content}>
        Originating from Valencia, paella is a rice dish cooked with saffron and various ingredients such as seafood, chicken, and vegetables. This iconic dish is often enjoyed during family gatherings and special occasions.
      </Text>
      <Text style={styles.subSectionTitle}>Tapas</Text>
      <Text style={styles.content}>
        Tapas are small plates of food that are typically enjoyed with drinks. They can range from simple olives to more elaborate dishes like patatas bravas or jamón ibérico. Tapas culture is an integral part of Spanish social life, encouraging sharing and conversation.
      </Text>

      <Text style={styles.sectionTitle}>Music and Dance</Text>
      <Image
        source={{ uri: 'https://www.rondatoday.com/wp-content/uploads/2013/02/flamenco-dancers-672x372.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.imageCaption}>Flamenco Performance</Text>
      <Text style={styles.content}>
        Music and dance are essential elements of Spanish culture. One of the most famous and passionate forms of Spanish music and dance is Flamenco. Originating from the Andalusian region, Flamenco is characterized by its emotional intensity, intricate guitar playing, and powerful dance movements.
      </Text>

      <Text style={styles.sectionTitle}>Art and Architecture</Text>
      <Image
        source={{ uri: 'https://holeinthedonut.com/wp-content/uploads/2013/04/Spain-Barcelona-Gaudi-Sagrada-Familia6.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.imageCaption}>Sagrada Familia in Barcelona</Text>
      <Text style={styles.content}>
        Spain has a rich artistic and architectural heritage. From the works of famous artists like Pablo Picasso and Salvador Dalí to the stunning architecture of Antoni Gaudí, Spanish art and architecture are celebrated worldwide. The Sagrada Familia in Barcelona is one of Gaudí's masterpieces and a symbol of Spanish creativity and innovation.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  imageCaption: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CulturalInsightsScreen;