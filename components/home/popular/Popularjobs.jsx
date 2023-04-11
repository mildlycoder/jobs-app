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

import styles from './popularjobs.style'
import { COLORS, icons, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'

import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const {loading, response, error} = useFetch('search', {
    query: 'react',
    num_page: 1,
  })

   console.log(error)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
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
              <FlatList
                data={response}
                keyExtractor={item => item?.job_id}
                renderItem={({item}) => (
                  <PopularJobCard
                    item={item}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{columnGap: SIZES.small, marginVertical: SIZES.small}}
              />
            )
        }
      </View>
    </View>
  )
}

export default Popularjobs