import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                borderTopColor: '#000',
                borderTopWidth: 1,
                minHeight: '70',
            }
        }}>
      <Tabs.Screen
        name='index'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: () => (
                <Image 
                source={require('../../assets/icons/home.png')} // Ruta ajustada
                className="flex-1 w-8 h-10 mt-1"
                resizeMode='contain'
                title='Home'
                />

            )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout