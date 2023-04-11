import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearbyJobCard = ({item, handleOnPress}) => {
  //console.log(item)
  
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleOnPress}
    >
      <TouchableOpacity style={styles.logoContainer}>
          <Image  
          source={{ uri: item.employer_logo } } 
          style={styles.logoImage}
          resizeMode='contain'
          />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{item?.job_title}</Text>
        <Text style={styles.jobType} numberOfLines={1}>{item?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard