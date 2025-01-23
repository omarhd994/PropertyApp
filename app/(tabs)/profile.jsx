import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const Profile = () => {
  const handleLogout = async () => {};
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView>
        <View className='flex flex-row items-center justify-between mt-5'>
          <Text className='text-xl font-rubik-bold '>Profile</Text>
          <Image source={require('../../assets/icons/bell.png')}/>
        </View>
          <View className='flex-row justify-center flex mt-5'>
            <View className='flex flex-col items-center relative mt-5'>
              <Image source={require('../../assets/images/avatar.png')} 
              className='size-44 relative rounded-full'/>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile