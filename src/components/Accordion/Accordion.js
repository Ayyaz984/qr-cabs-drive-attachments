import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Accordion = ({title, children, style, block, isExpanded}) => {
  const [expanded, setExpanded] = useState(isExpanded || false);

  const toggleAccordion = () => {
    if (block) setExpanded(!expanded);
  };

  return (
    <View style={{}}>
      {/* Header */}
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {!expanded && (
          <Ionicons name="chevron-up-outline" size={24} color="black" />
        )}
        {expanded && (
          <Ionicons name="chevron-down-outline" size={24} color="black" />
        )}
      </TouchableOpacity>

      {/* Content (Visible when expanded) */}
      {expanded &&
        children.map((child, i) => (
          <View key={i} style={styles.content}>
            {child}
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#064347',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#090A0A',
  },
  content: {
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

export default Accordion;
