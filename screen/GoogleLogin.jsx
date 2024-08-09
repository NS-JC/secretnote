import { useState } from 'react';
import { View, Pressable, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
	GOOGLE_WEB_CLIENT_ID,
	GOOGLE_ANDROID_CLIENT_ID,
	GOOGLE_IOS_CLIENT_ID,
} from '@env';

GoogleSignin.configure({
	webClientId: GOOGLE_WEB_CLIENT_ID,
	androidClientId: GOOGLE_ANDROID_CLIENT_ID,
	iosClientId: GOOGLE_IOS_CLIENT_ID,
	scopes: ['profile', 'email'],
});

const GoogleLogin = async () => {
	await GoogleSignin.hasPlayServices();
	const userInfo = await GoogleSignin.signIn();
	return userInfo;
};

export default function App() {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const[user, setUser] = useState('')

	const handleGoogleLogin = async () => {
		setLoading(true);
		try {
			const response = await GoogleLogin();
			const { idToken, user } = response;
			console.log(user)
			setUser(user)
			// if (idToken) {
			// 	const resp = await authAPI.validateToken({
			// 		token: idToken,
			// 		email: user.email,
			// 	});
			// 	await handlePostLoginData(resp.data);
			// }
		} catch (apiError) {
			setError(
				apiError?.response?.data?.error?.message || 'Something went wrong'
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Pressable onPress={handleGoogleLogin}><Text>Continue with Google</Text></Pressable>
			<Image style={{height:50, width:50}} resizeMode='cover' source={{uri:user?.photo}}></Image>
			<Text>{user?.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#f0f0f5',
	}
})