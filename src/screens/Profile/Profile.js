import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import ImageAvatar from '../../components/Profile/ImageAvatar/ImageAvatar';
import DriveMode from '../../components/Profile/DriveMode/DriveMode';
import Accordion from '../../components/Accordion/Accordion';
import DocumentAccordionItem from '../../components/Accordion/DocumentAccordionItem';

const Profile = () => {
  const [driveMode, setDriveMode] = useState('');

  const dModeData = [
    {
      id: 1,
      title: 'Looking for Rides',
    },
    {
      id: 2,
      title: 'Parcel/Transport',
    },
    {
      id: 3,
      title: 'Driver',
    },
    {
      id: 4,
      title: 'Food Delivery',
    },
  ];

  const handleDriveMode = dMode => {
    setDriveMode(dMode);
  };
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{flex: 1}}>
      <View style={styles.container}>
        {/* Profile Details */}
        <View style={styles.profileDetailsWrapper}>
          <ImageAvatar />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Jhone Doe</Text>
            <Text style={styles.phone}>+91987654231</Text>
            <Text style={styles.email}>email@gmail.com</Text>
          </View>
        </View>
        {/* Drive Modes */}
        <View style={styles.driveModeContainer}>
          <Text style={styles.driveModeHeading}>Choose your Drive Mode</Text>

          {/* modes */}
          <View style={styles.driveModeWrapper}>
            {dModeData?.map((item, index) => (
              <DriveMode
                key={item.id}
                driveMode={driveMode}
                handleDriveMode={handleDriveMode}
                title={item.title}
              />
            ))}
          </View>
        </View>

        {/* Documents Accordion */}
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <Accordion title={'Documents'} block={true} isExpanded={true}>
            <DocumentAccordionItem
              title={'Adhaar Card'}
              iconName="chevron-forward-outline"
            />
            <DocumentAccordionItem
              title={'Pan Card'}
              iconName="chevron-forward-outline"
            />
            <DocumentAccordionItem
              title={'Driving Licence'}
              iconName="chevron-forward-outline"
            />
            <DocumentAccordionItem
              title={'Most drive Vehicle'}
              iconName="chevron-forward-outline"
            />
            <DocumentAccordionItem
              title={'Years of Experience'}
              iconName="chevron-forward-outline"
            />
          </Accordion>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
