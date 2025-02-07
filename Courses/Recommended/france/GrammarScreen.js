import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FranceGrammarScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>French Grammar</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nouns and Articles</Text>
        <Text style={styles.content}>
          In French, nouns have gender and number. They are either masculine or feminine, and singular or plural.
        </Text>
        <Text style={styles.subSectionTitle}>Gender</Text>
        <Text style={styles.content}>
          - Masculine nouns usually end in "-eau", "-isme", "-ment" (e.g., "le bateau" - the boat).{'\n'}
          - Feminine nouns usually end in "-tion", "-sion", "-té" (e.g., "la nation" - the nation).
        </Text>
        <Text style={styles.subSectionTitle}>Number</Text>
        <Text style={styles.content}>
          - Singular nouns refer to one item (e.g., "le chat" - the cat).{'\n'}
          - Plural nouns refer to more than one item and typically end in "-s" (e.g., "les chats" - the cats).
        </Text>
        <Text style={styles.subSectionTitle}>Articles</Text>
        <Text style={styles.content}>
          - Definite articles (the): "le" (masculine singular), "la" (feminine singular), "les" (plural).{'\n'}
          - Indefinite articles (a/an): "un" (masculine singular), "une" (feminine singular), "des" (plural).
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Verbs and Conjugation</Text>
        <Text style={styles.subSectionTitle}>Regular Verbs</Text>
        <Text style={styles.content}>
          Regular verbs follow specific patterns based on their endings: "-er", "-ir", and "-re".{'\n'}
          Example of conjugating the verb "parler" (to speak) in the present tense:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- Je parle (I speak)</Text>
          <Text style={styles.exampleText}>- Tu parles (You speak)</Text>
          <Text style={styles.exampleText}>- Il/Elle/On parle (He/She/One speaks)</Text>
          <Text style={styles.exampleText}>- Nous parlons (We speak)</Text>
          <Text style={styles.exampleText}>- Vous parlez (You all speak)</Text>
          <Text style={styles.exampleText}>- Ils/Elles parlent (They speak)</Text>
        </View>
        <Text style={styles.subSectionTitle}>Irregular Verbs</Text>
        <Text style={styles.content}>
          Irregular verbs do not follow regular conjugation patterns. Example of the verb "être" (to be) in the present tense:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- Je suis (I am)</Text>
          <Text style={styles.exampleText}>- Tu es (You are)</Text>
          <Text style={styles.exampleText}>- Il/Elle/On est (He/She/One is)</Text>
          <Text style={styles.exampleText}>- Nous sommes (We are)</Text>
          <Text style={styles.exampleText}>- Vous êtes (You all are)</Text>
          <Text style={styles.exampleText}>- Ils/Elles sont (They are)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Adjectives and Agreement</Text>
        <Text style={styles.content}>
          Adjectives in French must agree with the nouns they describe in gender and number.
        </Text>
        <Text style={styles.subSectionTitle}>Gender Agreement</Text>
        <Text style={styles.content}>
          - Masculine nouns with masculine adjectives (e.g., "le grand garçon" - the tall boy).{'\n'}
          - Feminine nouns with feminine adjectives (e.g., "la grande fille" - the tall girl).
        </Text>
        <Text style={styles.subSectionTitle}>Number Agreement</Text>
        <Text style={styles.content}>
          - Singular nouns with singular adjectives (e.g., "le chat noir" - the black cat).{'\n'}
          - Plural nouns with plural adjectives (e.g., "les chats noirs" - the black cats).
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pronouns</Text>
        <Text style={styles.content}>
          Pronouns replace nouns to avoid repetition. Subject pronouns include:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- Je (I)</Text>
          <Text style={styles.exampleText}>- Tu (You informal)</Text>
          <Text style={styles.exampleText}>- Il/Elle/On (He/She/One)</Text>
          <Text style={styles.exampleText}>- Nous (We)</Text>
          <Text style={styles.exampleText}>- Vous (You all informal)</Text>
          <Text style={styles.exampleText}>- Ils/Elles (They)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Common Phrases and Sentences</Text>
        <Text style={styles.content}>
          Practice common phrases to get familiar with French sentence structure:
        </Text>
        <View style={styles.exampleBox}>
          <Text style={styles.exampleText}>- Comment vous appelez-vous? (What is your name?)</Text>
          <Text style={styles.exampleText}>- Je m'appelle [Your Name] (My name is [Your Name]).</Text>
          <Text style={styles.exampleText}>- Où est la salle de bain? (Where is the bathroom?)</Text>
          <Text style={styles.exampleText}>- Je voudrais une tasse de café, s'il vous plaît (I would like a cup of coffee, please).</Text>
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
    backgroundColor: '#fafafa',
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

export default FranceGrammarScreen;