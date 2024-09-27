import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Menuicons1 from '../../assets/icons/menu';
import Notificationicon1 from '../../assets/icons/notifications';


const { width } = Dimensions.get('window');

const HomeAppBar1: React.FC = () => {
  return (
    <View style={styles.appBar}>
      <View style={styles.menuIconContainer}>
        <Menuicons1 style={styles.menuIcon} />
      </View>
      <Text style={styles.title}>Sales</Text>
      <View style={styles.notificationIconContainer}>
        <Notificationicon1 style={styles.notificationIcon} />
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationCount}>9</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.imageBox}>
          <Image
            source={{ uri: 'https://www.goodreturns.in/img/2018/06/nestle-1528694959.jpg' }}
            style={styles.logo}
          />
          <Image
            source={{ uri: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg' }}
            style={styles.profileImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HomeAppBar1;

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#05283d',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  menuIconContainer: {
    marginRight: 20,
  },
  menuIcon: {
    width: 24,  
    height: 24, 
  },
  title: {
    color: 'white',
    fontSize: width * 0.05, 
    fontWeight: 'bold',
    flex: 1,
  },
  notificationIconContainer: {
    position: 'relative',
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  notificationBadge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  imageBox: {
    width: width * 0.2,
    height: 40,
    backgroundColor: 'rgb(231, 231, 231)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 15, 
  },
  logo: {
    width: '87%',
    height: '87%',
    resizeMode: 'cover',
  },
  profileImage: {
    position: 'absolute',
    right: -15,
    top: '50%',
    transform: [{ translateY: -15 }],
    width: 28,
    height: 28,
    borderRadius: 15,
    borderWidth: 2,

  },
});
