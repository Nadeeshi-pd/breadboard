import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const ExperimentsScreen = () => {
  const handleExperiments = () => {
    console.log('Experiments pressed');
  };

  const handleSemiconductors = () => {
    console.log('Characteristics of Semiconductors pressed');
  };

  const handleThirdOption = () => {
    console.log('Third option pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Experiments Button */}
        <TouchableOpacity style={styles.experimentsButton} onPress={handleExperiments}>
          <Text style={styles.experimentsButtonText}>EXPERIMENTS</Text>
        </TouchableOpacity>

        {/* Characteristics of Semiconductors Button */}
        <TouchableOpacity style={styles.semiconductorButton} onPress={handleSemiconductors}>
          <Text style={styles.semiconductorButtonText}>Characteristics of Semiconductors</Text>
        </TouchableOpacity>

        {/* Third Empty Button */}
        <TouchableOpacity style={styles.emptyButton} onPress={handleThirdOption}>
          <Text style={styles.emptyButtonText}></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  experimentsButton: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 25,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  experimentsButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    letterSpacing: 1.2,
  },
  semiconductorButton: {
    backgroundColor: '#f8d7da',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 25,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  semiconductorButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    lineHeight: 20,
  },
  emptyButton: {
    backgroundColor: '#f8d7da',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 25,
    width: '85%',
    alignItems: 'center',
    minHeight: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  emptyButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
});

export default ExperimentsScreen;
