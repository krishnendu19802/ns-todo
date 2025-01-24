// src/Navigator.tsx

import * as React from 'react'
import { BaseNavigationContainer } from '@react-navigation/core'
import { stackNavigatorFactory } from 'react-nativescript-navigation'
import { MainStackParamList } from './NavigationParamList'
import { HomeScreen } from './HomeScreen'
import { DetailsScreen } from './DetailsScreen'

// Add this 👇
import { FlickService } from '../services/flick.service'

const StackNavigator = stackNavigatorFactory()

export const mainStackNavigator = () => {
  // Add this 👇
//   const flickTitle = flickId => FlickService.getFlickById(flickId).title

  const flickTitle = flickId => FlickService.getFlickById(flickId)?.title
  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true
        }}
      >
        <StackNavigator.Screen
          name="Home"
          options={{
            title: 'NativeFlix'
          }}
          component={HomeScreen}
        />
        <StackNavigator.Screen
          name="Details"
          // Add this 👇
          options={({ route }) => ({
            title: flickTitle((route.params as MainStackParamList['Details']).flickId)
          })}
          component={DetailsScreen}
        />
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  )
}