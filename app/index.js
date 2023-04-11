import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, {useState} from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONT, icons, SIZES, images } from "../constants";

//import components from components folder
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";

export default function Home() { 
  const router = useRouter()


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
            elevation: 0,
            shadowOpacity: 0,
          },

          headerLeft: () => ( 
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
            />
          ),  
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
            />
          ),

          headerTitle: ""
        }}
      />

      <ScrollView showsVerticalScrollIndicator={true}>
        <View 
        style={{
          flex: 1,
          backgroundColor: COLORS.lightWhite,
          padding: SIZES.medium,
          }}>
          <Welcome 
            userName="John Doe"
          />
          {/* <Popularjobs /> */}
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}