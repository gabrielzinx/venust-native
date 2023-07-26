import { View, Text, Image, StyleSheet } from "react-native";
import { SvgAvatar, SvgConfig, SvgFace, SvgHair, SvgWallet } from "../../components/CustomIcons";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "../EditProfile";
import Setting from "../Settings";
import PrivacyPolicy from "../PrivacyPolicy";
import Custom from "../Custom";
import Security from "../Security";
import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";
import firebase from "./../../Config";

const StakeProfile = createStackNavigator();

function ProfilePage() {

    const [data, setData] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref(`user/${user.uid}`).on("value", (value) => {
                    setData(value.val());
                })
            }
        })
    }, []);

    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="light" backgroundColor='#0A0A0C' />
                <View style={styles.cardProfile}>
                    <TouchableOpacity style={styles.configButton} onPress={() => navigation.navigate('EditProfile', { user: data })}>
                        <SvgConfig />
                    </TouchableOpacity>
                    <View style={styles.avatar}>
                        <SvgAvatar />
                    </View>
                    <Text style={styles.name}>{data ? data.nome : "Anônimo"}</Text>
                    <Text style={styles.username}>@{data ? data.username : "Anônimo"}</Text>
                </View>
                <View style={styles.walletCard}>
                    <Text style={styles.walletText}>Saldo</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
                        <Text style={styles.walletCash}>R$ 00,00</Text>
                        <SvgWallet />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                    <View style={styles.cardItem}>
                        <Text style={styles.cardText}>4A</Text>
                        <SvgHair />
                    </View>
                    <View style={styles.cardItem}>
                        <Text style={styles.cardText}>Redondo</Text>
                        <SvgFace />
                    </View>
                </View>
                <View style={{ width: '86%' }}>
                    <Text style={styles.text}>Favoritos</Text>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.barbershop}>
                        <Image
                            style={styles.image}
                            source={require('./../../images/landscape/barber-6.jpg')}
                        />
                        <View style={{ position: 'absolute', top: '58%', marginLeft: 8 }}>
                            <Text style={styles.barbershopTitle}>{"Placeholder"}</Text>
                            <Text style={styles.barbershopText}><Text style={{ color: "#CFE9DA" }}>★ {132}</Text> ({830}) - {"TYPE"}</Text>
                            <TouchableOpacity>
                                <Text style={styles.barbershopTextButton}>Clique para saber mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.barbershop}>
                        <Image
                            style={styles.image}
                            source={require('./../../images/landscape/barber-7.jpg')}
                        />
                        <View style={{ position: 'absolute', top: '58%', marginLeft: 8 }}>
                            <Text style={styles.barbershopTitle}>{"Placeholder"}</Text>
                            <Text style={styles.barbershopText}><Text style={{ color: "#CFE9DA" }}>★ {132}</Text> ({830}) - {"TYPE"}</Text>
                            <TouchableOpacity>
                                <Text style={styles.barbershopTextButton}>Clique para saber mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.barbershop}>
                        <Image
                            style={styles.image}
                            source={require('./../../images/landscape/barber-8.jpg')}
                        />
                        <View style={{ position: 'absolute', top: '58%', marginLeft: 8 }}>
                            <Text style={styles.barbershopTitle}>{"Placeholder"}</Text>
                            <Text style={styles.barbershopText}><Text style={{ color: "#CFE9DA" }}>★ {132}</Text> ({830}) - {"TYPE"}</Text>
                            <TouchableOpacity>
                                <Text style={styles.barbershopTextButton}>Clique para saber mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

export default function Profile() {
    return (
        <StakeProfile.Navigator screenOptions={{
            headerShown: false
        }}>
            <StakeProfile.Screen name="ProfilePage" component={ProfilePage} />
            <StakeProfile.Screen name="EditProfile" component={EditProfile} />
            <StakeProfile.Screen name="Settings" component={Setting} />
            <StakeProfile.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <StakeProfile.Screen name="Custom" component={Custom} />
            <StakeProfile.Screen name="Security" component={Security} />
        </StakeProfile.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A090D',
        alignItems: 'center',
        paddingVertical: 50,
        gap: 30
    },
    cardProfile: {
        width: '90%',
        borderRadius: 16,
        backgroundColor: '#0A1114',
        alignItems: 'center',
        paddingVertical: 34,
    },
    avatar: {
        backgroundColor: '#2FBBB3',
        borderRadius: 25,
    },
    configButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 23,
        right: 25
    },
    name: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700,
        marginTop: 24,
        marginBottom: 8
    },
    username: {
        color: '#848889',
        fontSize: 12,
        fontWeight: 600,
    },
    walletCard: {
        width: '90%',
        backgroundColor: '#0C1113',
        paddingHorizontal: 26,
        paddingTop: 14,
        paddingBottom: 32,
        borderRadius: 16
    },
    walletText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700
    },
    walletCash: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 700,
    },
    cardItem: {
        width: '46%',
        backgroundColor: '#0C1113',
        height: 110,
        borderRadius: 16,
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 20
    },
    cardText: {
        alignSelf: 'flex-start',
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 10
    },
    text: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 700,
        alignSelf: 'flex-start',
    },
    barbershop: {
        marginLeft: 24,
    },
    image: {
        width: 250,
        height: 160,
        borderRadius: 12
    },
    barbershopTitle: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 18
    },
    barbershopText: {
        color: '#fff',
    },
    barbershopTextButton: {
        color: '#fff',
    }
});