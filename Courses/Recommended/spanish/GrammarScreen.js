import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const GrammarScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Spanish Grammar</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nouns and Articles</Text>
        <Text style={styles.content}>
          In Spanish, nouns have gender and number. They are either masculine or feminine, and singular or plural.
        </Text>
        <Text style={styles.subSectionTitle}>Gender</Text>
        <Text style={styles.content}>
          - Masculine nouns usually end in "-o" (e.g., "el libro" - the book).{'\n'}
          - Feminine nouns usually end in "-a" (e.g., "la mesa" - the table).
        </Text>
        <Text style={styles.subSectionTitle}>Number</Text>
        <Text style={styles.content}>
          - Singular nouns refer to one item (e.g., "el coche" - the car).{'\n'}
          - Plural nouns refer to more than one item and typically end in "-s" or "-es" (e.g., "los coches" - the cars).
        </Text>
        <Text style={styles.subSectionTitle}>Articles</Text>
        <Text style={styles.content}>
          - Definite articles (the): "el" (masculine singular), "la" (feminine singular), "los" (masculine plural), "las" (feminine plural).{'\n'}
          - Indefinite articles (a/an): "un" (masculine singular), "una" (feminine singular), "unos" (masculine plural), "unas" (feminine plural).
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: '#fae3d7' }]}>
        <Text style={styles.sectionTitle}>Verbs and Conjugation</Text>
        <Text style={styles.subSectionTitle}>Regular Verbs</Text>
        <Text style={styles.content}>
          Regular verbs follow specific patterns based on their endings: "-ar", "-er", and "-ir".{'\n'}
          Example of conjugating the verb "hablar" (to speak) in the present tense:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- Yo hablo (I speak)</Text>
          <Text style={styles.exampleText}>- Tú hablas (You speak)</Text>
          <Text style={styles.exampleText}>- Él/Ella/Usted habla (He/She/You formal speak)</Text>
          <Text style={styles.exampleText}>- Nosotros/Nosotras hablamos (We speak)</Text>
          <Text style={styles.exampleText}>- Vosotros/Vosotras habláis (You all speak)</Text>
          <Text style={styles.exampleText}>- Ellos/Ellas/Ustedes hablan (They/You all formal speak)</Text>
        </View>
        <Text style={styles.subSectionTitle}>Irregular Verbs</Text>
        <Text style={styles.content}>
          Irregular verbs do not follow regular conjugation patterns. Example of the verb "ser" (to be) in the present tense:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- Yo soy (I am)</Text>
          <Text style={styles.exampleText}>- Tú eres (You are)</Text>
          <Text style={styles.exampleText}>- Él/Ella/Usted es (He/She/You formal is)</Text>
          <Text style={styles.exampleText}>- Nosotros/Nosotras somos (We are)</Text>
          <Text style={styles.exampleText}>- Vosotros/Vosotras sois (You all are)</Text>
          <Text style={styles.exampleText}>- Ellos/Ellas/Ustedes son (They/You all formal are)</Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: '#dccaa8' }]}>
        <Text style={styles.sectionTitle}>Adjectives and Agreement</Text>
        <Text style={styles.content}>
          Adjectives in Spanish must agree with the nouns they describe in gender and number.
        </Text>
        <Text style={styles.subSectionTitle}>Gender Agreement</Text>
        <Text style={styles.content}>
          - Masculine nouns with masculine adjectives (e.g., "el chico alto" - the tall boy).{'\n'}
          - Feminine nouns with feminine adjectives (e.g., "la chica alta" - the tall girl).
        </Text>
        <Text style={styles.subSectionTitle}>Number Agreement</Text>
        <Text style={styles.content}>
          - Singular nouns with singular adjectives (e.g., "el coche rojo" - the red car).{'\n'}
          - Plural nouns with plural adjectives (e.g., "los coches rojos" - the red cars).
        </Text>
      </View>

      <View style={[styles.section, { backgroundColor: '#d0bbcd' }]}>
        <Text style={styles.sectionTitle}>Pronouns</Text>
        <Text style={styles.content}>
          Pronouns replace nouns to avoid repetition. Subject pronouns include:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- Yo (I)</Text>
          <Text style={styles.exampleText}>- Tú (You informal)</Text>
          <Text style={styles.exampleText}>- Él/Ella/Usted (He/She/You formal)</Text>
          <Text style={styles.exampleText}>- Nosotros/Nosotras (We)</Text>
          <Text style={styles.exampleText}>- Vosotros/Vosotras (You all informal)</Text>
          <Text style={styles.exampleText}>- Ellos/Ellas/Ustedes (They/You all formal)</Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: '#daf6f2' }]}>
        <Text style={styles.sectionTitle}>Common Phrases and Sentences</Text>
        <Text style={styles.content}>
          Practice common phrases to get familiar with Spanish sentence structure:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- ¿Cómo te llamas? (What is your name?)</Text>
          <Text style={styles.exampleText}>- Me llamo [Your Name] (My name is [Your Name]).</Text>
          <Text style={styles.exampleText}>- ¿Dónde está el baño? (Where is the bathroom?)</Text>
          <Text style={styles.exampleText}>- Quisiera una taza de café, por favor (I would like a cup of coffee, please).</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  subSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#777',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#444',
  },
  exampleBox: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  exampleText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#00695c',
  },
});

export default GrammarScreen;