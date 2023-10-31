import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  profileDetailsWrapper: {
    flex: 0.4,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#090A0A',
  },
  profileInfo: {
    marginHorizontal: 25,
  },
  phone: {
    fontSize: 14,
    fontWeight: '500',
    color: '#090A0A',
  },
  email: {
    fontSize: 14,
    fontWeight: '500',
    color: '#090A0A',
  },

  //drive mode
  driveModeContainer: {},
  driveModeWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  driveModeHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: '#090A0A',
  },
});
