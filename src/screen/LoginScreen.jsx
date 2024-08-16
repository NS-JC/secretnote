import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
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

export default function LoginScreen() {
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const[user, setUser] = useState('');
	const navigation = useNavigation();

	//need to modify code for user authentification
	const handleGoogleLogin = async () => {
		setLoading(true);
		try {
			const response = await GoogleLogin();
			const { idToken, user } = response;

			// Navigate to MainTabScreen after successful login, there is no checking procedures yet
			navigation.replace('MainTab');

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
			<Text style={styles.title}>The Secret Note</Text>
			<TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
				<Image source={require('../img/GoogleIcon.png')} style={styles.icon} />
				<Text style={styles.buttonText}>구글 아이디로 로그인하기</Text>
			</TouchableOpacity>

			{/* checking if logged in */}
			{user && (
				<>
					<Image
						style={{ height: 50, width: 50 }}
						resizeMode='cover'
						source={{ uri: user?.photo }}
					/>
					<Text>{user?.name}</Text>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#f0f0f5',
		paddingBottom: hp('15%'),  // 15% of the screen height
		position: 'relative',
	},
	title: {
		fontSize: wp('8%'),  // Font size based on 8% of the screen width
		fontWeight: 'bold',
		position: 'absolute',
		top: hp('40%'),  // 40% from the top of the screen height
		textAlign: 'center',
		width: '100%',
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: hp('1.5%'),  // Padding vertical based on 1.5% of the screen height
		paddingHorizontal: wp('7%'),  // Padding horizontal based on 7% of the screen width
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#ccc',
	},
	icon: {
		width: wp('6%'),  // Icon width based on 6% of the screen width
		height: wp('6%'),  // Icon height based on 6% of the screen width
		marginRight: wp('2.5%'),  // Margin right based on 2.5% of the screen width
	},
	buttonText: {
		fontSize: wp('4%'),  // Font size based on 4% of the screen width
		color: '#333',
	},
});