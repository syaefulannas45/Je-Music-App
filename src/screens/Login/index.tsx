import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {ButtonCS, Gap, Header, Input, Link, TextCS} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {ICEmail, ICGoogle, ICPassword} from '../../assets';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../../config';
import {ref, set} from 'firebase/database';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../router';

type LoginScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'login'
>;
const LoginScreen = ({navigation}: LoginScreenNavigationProp) => {
  const [dataReg, setDataReg] = useState({
    email: '',
    password: '',
  });
  const handleChange = (key: string, value: string) => {
    setDataReg({...dataReg, [key]: value});
  };
  const handleRegister = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        dataReg.email,
        dataReg.password,
      );
      const userDatabaseRef = ref(db, `users/${userCredential.user.uid}`);
      const newDataUser = {
        email: dataReg.email,
        uid: userCredential.user.uid,
      };
      await set(userDatabaseRef, newDataUser);
    } catch (error) {}
  };
  return (
    <LinearGradient
      className="flex-1 px-4 pt-16"
      colors={['#4C2A6A', '#161B33']}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}>
      <Header
        title="Login To Your Account"
        desc="Log in to discover personalized playlists, exclusive content, and more from your favorite artists."
      />
      <Gap className="h-[80px]" />
      <Input
        logo={<ICEmail />}
        placeholder="Masukkan Email Anda"
        onChangeText={value => handleChange('email', value)}
      />
      <Gap className="h-10" />
      <Input
        logo={<ICPassword />}
        placeholder="Masukkan Password Anda"
        onChangeText={value => handleChange('password', value)}
      />
      <Gap className="h-10" />
      <ButtonCS onPress={() => navigation.replace('mainapp')}>Sign In</ButtonCS>
      <View className="flex flex-row w-full mt-10 items-center">
        <View className="w-[40%] bg-text-600 h-1" />
        <TextCS className="text-center w-[20%] text-text-600 font-600">
          Or
        </TextCS>
        <View className="w-[40%] bg-text-600 h-1" />
      </View>
      <View className="flex justify-center flex-row mt-6">
        <ButtonCS
          textStyle="text-[18px] text-[#333333]"
          bgStyle="bg-white w-[70%] flex flex-row items-center justify-center"
          logo={<ICGoogle />}>
          Sign With Google
        </ButtonCS>
      </View>
      <View className="flex flex-row justify-center items-cente space-x-2  mt-4">
        <TextCS className="text-text-300">Already have an account ?</TextCS>
        <View>
          <Link
            onPress={() => navigation.navigate('register')}
            className=" text-text-200"
            title="Sign Up"
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
