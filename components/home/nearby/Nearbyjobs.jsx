import React, {useState} from 'react'
import { 
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator 
} from 'react-native'

import axios from 'axios'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS, icons, SIZES } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter();
  const {loading, response, error} = useFetch('search', {
    query: 'react native',
    num_page: 1,
  })

   //console.log(response.length)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={() => {}}>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
      {
          loading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text style={styles.error}>Something went wrong</Text>
          ) : (
                response?.map((item, index) => (
                  <NearbyJobCard
                    key={item?.job_id}
                    item={item}
                    handleOnPress={() => {
                      router.push(`jobdetails/${item.job_id}`)  
                    }}
                  />
                ))
            )
      }
      </View>
    </View>
  )
}

export default Nearbyjobs