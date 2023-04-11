import React from 'react'
import { 
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'

import { icons,images, SIZES } from '../../../constants'

const Welcome = ({userName}) => {
  const jobTypes = ['Full-time','Part-time', 'Contract', 'Freelance', 'Internship']
  const [activeJobType, setActiveJobType] = React.useState(jobTypes[0])
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.username}>Hello {userName}</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search for jobs'
          value=''
          onChange={() => {}}
        />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            resizeMode='cover'
            source={icons.search}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>  
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
            onPress={()=> {
              setActiveJobType(item)
              router.push(`/search/${item}`)
              }}>
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
          horizontal
          scrollIndicatorInsets={{right: 10}}
          contentContainerStyle={{columnGap: SIZES.small, marginVertical: SIZES.small}}
        />
      </View>
    </View>
  )
}

export default Welcome