import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CircuitBuilderScreen = () => {
  const handleComponentSelect = () => {
    console.log('Component selector pressed');
  };

  const handleProfile = () => {
    console.log('Profile pressed');
  };

  const handleCheckConnectivity = () => {
    console.log('Check Connectivity pressed');
  };

  // Generate breadboard grid lines
  const renderBreadboardLines = () => {
    const lines = [];
    for (let i = 0; i < 60; i++) {
      lines.push(
        <View key={i} style={styles.breadboardLine} />
      );
    }
    return lines;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.componentButton} onPress={handleComponentSelect}>
          <Icon name="developer-board" size={24} color="#333" />
          <Icon name="shopping-cart" size={16} color="#333" style={styles.cartIcon} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
          <FontAwesome name="user" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Connection Status */}
      <View style={styles.connectionContainer}>
        <FontAwesome name="bluetooth" size={24} color="#6c5ce7" />
        <Text style={styles.connectionText}>CONNECTED</Text>
        <View style={styles.statusDot} />
      </View>

      {/* Breadboard Area */}
      <ScrollView style={styles.breadboardContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.breadboard}>
          <View style={styles.breadboardGrid}>
            {renderBreadboardLines()}
          </View>
        </View>
      </ScrollView>

      {/* Instructions Section */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsTitle}>INSTRUCTIONS</Text>
        
        <Text style={styles.instructionText}>
          Connect your components in coloured area
        </Text>
        
        <Text style={styles.instructionText}>
          Reassure component connectivity before conducting the experiment from.
        </Text>
        
        <TouchableOpacity style={styles.connectivityButton} onPress={handleCheckConnectivity}>
          <Text style={styles.connectivityButtonText}>Check Connectivity</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  componentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  cartIcon: {
    marginLeft: 4,
    marginTop: -8,
  },
  profileButton: {
    backgroundColor: '#ffb3ba',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginBottom: 1,
  },
  connectionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 15,
    letterSpacing: 1,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00b894',
  },
  breadboardContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  breadboard: {
    padding: 20,
    minHeight: 300,
  },
  breadboardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  breadboardLine: {
    width: 2,
    height: 200,
    backgroundColor: '#333',
    marginHorizontal: 1,
  },
  instructionsContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  connectivityButton: {
    backgroundColor: '#ffb3ba',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
  },
  connectivityButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});

export default CircuitBuilderScreen;
