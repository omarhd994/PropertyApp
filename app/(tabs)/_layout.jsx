import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopColor: '#000',
                borderTopWidth: 1,
                minHeight: 70,
            },
            tabBarLabelStyle: 'text-sm',
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarItemStyle: {paddingTop: 10}, // TabBarStyle.. Con NativeWind no se puede, solo con clasico
          }}>
      <Tabs.Screen
        name='index'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
                <Image 
                source={require('../../assets/icons/home.png')} // Ruta ajustada
                className={`flex-1 w-8 ${focused ? 'tint-blue-500' : 'tint-gray-400'}`}
                resizeMode='contain'
                title='Home'
                />
            )
        }}
      />

      <Tabs.Screen
              name='explore'
              options={{
                  title: 'Explore',
                  headerShown: false,
                  tabBarLabel: 'Explore',
                  tabBarIcon: ({focused}) => (
                      <Image 
                      source={require('../../assets/icons/search.png')} // Ruta ajustada
                      className={`w-6 h-6 ${focused ? 'tint-blue-500' : 'tint-gray-400'}`}
                      resizeMode='contain'
                      title='Explore'
                      />
                  )
              }}
            />
            
            <Tabs.Screen
        name='profile'
        options={{
            title: 'Profile',
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
                <Image 
                source={require('../../assets/icons/person.png')} // Ruta ajustada
                className={`flex-1 w-8 h-10 ${focused ? 'tint-blue-500' : 'tint-gray-400'}`}
                resizeMode='contain'
                title='Profile'
                />
            )
        }}
      />
    </Tabs>

    
  )
}

export default TabsLayout