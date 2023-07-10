import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { SvgBack, SvgConfirm, SvgMapLine, SvgSave } from "../../components/CustomIcons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Barbershop(props) {

    const data = props.route.params.data;

    const [isDescription, setIsDescription] = useState(true);
    const [isReview, setIsReview] = useState(true);

    var description = data.data.description.replace(/\\n/g, '\n');

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <SvgBack />
            </TouchableOpacity>

            <ScrollView style={{ flexGrow: 0 }} horizontal={true}>
                <Image
                    style={styles.barbershopImage}
                    source={data.barbershopImage}
                />
                <Image style={styles.barbershopImage} />
                <Image style={styles.barbershopImage} />
            </ScrollView>

            <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.barbershopTitle}>{data.data.name}</Text>
                    <Text style={[styles.barbershopAddress, { textTransform: 'uppercase' }]}>{`${data.data.address.street}, ${data.data.address.number}`}</Text>
                    <Text style={styles.barbershopSlogan}>{data.data.slogan}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        <SvgMapLine />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SvgSave />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.subServices}>

                <View style={styles.buttonList}>
                    <View style={{ flexDirection: 'row', gap: 16 }}>
                        <TouchableOpacity style={[styles.toggleButton, { backgroundColor: isDescription ? '#23202e' : '#18161fc2' }]} onPress={() => { setIsDescription(!isDescription) }}>
                            <Text style={{ color: '#fff' }}>Descrição</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.toggleButton, { backgroundColor: isReview ? '#18161fc2' : '#23202e' }]} onPress={() => setIsReview(!isReview)}>
                            <Text style={{ color: '#fff' }}>Avaliações</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.schedulingButton}>
                        <Text style={styles.schedulingButtonText}>Agendar</Text>
                        <SvgConfirm pathColor="#000" />
                    </TouchableOpacity>
                </View>

                <View style={[styles.box, {display: isDescription ? 'flex' : 'none'}]}>
                    <Text style={styles.text}>{description}</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Entre em contato:</Text>
                    <View style={{ backgroundColor: '#252525', width: '90%', height: 24, borderRadius: 8 }}></View>
                    <View style={{ backgroundColor: '#252525', width: '90%', height: 24, borderRadius: 8 }}></View>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0A0C',
        paddingHorizontal: 16,
        marginTop: 16
    },
    backButton: {
        marginVertical: 18,
        justifyContent: 'center',
        width: 52
    },
    text: {
        fontSize: 14,
        fontWeight: 500,
        color: '#FFF',
    },
    barbershopImage: {
        width: 331,
        height: 202,
        borderRadius: 16,
        marginRight: 16,
        backgroundColor: "#1c1c1c"
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100
    },
    titleContainer: {
        justifyContent: 'center',
        gap: 4
    },
    barbershopTitle: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 700,
    },
    barbershopAddress: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 600,
    },
    barbershopSlogan: {
        color: '#CCC',
        fontSize: 12,
        fontWeight: 500
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    subServices: {
        borderTopWidth: 0.5,
        borderTopColor: '#d9d9d9',
        paddingTop: 15,
    },
    buttonList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    toggleButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23202e',
        // backgroundColor: 'rgba(69, 217, 166, 0.05)',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10
    },
    schedulingButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#45D9A6',
        gap: 15
    },
    schedulingButtonText: {
        fontSize: 16,
        fontWeight: 700,
    },
    box: {
        backgroundColor: '#1c1c1caa',
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 8,
        gap: 10
    }
    // titleContainer: {
    //     fontSize: 22,
    //     fontWeight: 700,
    //     color: '#FFF',
    //     marginBottom: 22,
    //     width: '100%'
    // },
    // title: {
    //     fontSize: 28,
    //     fontWeight: 600,
    //     color: '#FFF',
    //     marginTop: 64,
    //     marginBottom: 32
    // },
    // scrollViewIcons: {
    //     // height: SYSTEM_OS === "ios" ? 0 : 170,
    // },
    // containerIcons: {
    //     flexWrap: 'wrap',
    //     alignItems: 'center',
    //     width: 110,
    //     gap: 12
    // },
    // button: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     borderRadius: 16,
    //     width: 80,
    //     height: 80
    // },
    // buttonText: {
    //     width: 100,
    //     fontSize: 18,
    //     fontWeight: 700,
    //     color: '#FFF',
    //     textAlign: 'center',
    // },
    // barbershopScroll: {
    // },
    // barbershopContainer: {
    //     width: 200,
    //     marginRight: 24
    // },
    // barbershopImage: {
    //     width: 331,
    //     height: 202,
    //     borderRadius: 16,
    //     backgroundColor: '#1C1C1C'
    // },

    // barbershopText: {
    //     color: '#999999',
    //     fontSize: 16,
    //     fontWeight: 400,
    // },
    // barbershopTextButton: {
    //     color: '#999999',
    //     fontSize: 13,
    //     fontWeight: 400,
    //     textDecorationLine: 'underline'
    // },
    // offerTitleContainer: {
    //     color: '#FFF',
    //     fontSize: 14,
    //     fontWeight: 700,
    //     gap: 177
    // },
    // offerContent: {
    //     flexDirection: 'column',
    //     width: 324,
    //     marginRight: 28
    // },
    // offerTitle: {
    //     flexWrap: 'wrap',
    //     fontSize: 18,
    //     fontWeight: 700,
    //     color: '#FFF',
    //     marginTop: 10
    // },
    // offerParagraph: {
    //     flexWrap: 'wrap',
    //     color: '#999',
    //     fontSize: 12,
    //     fontWeight: 400
    // },
    // communityContainer: {
    //     marginTop: 30,
    //     marginBottom: 30
    // },
    // buttonCommunity: {
    //     position: 'absolute',
    //     marginTop: 64,
    //     marginLeft: 10
    // }
});