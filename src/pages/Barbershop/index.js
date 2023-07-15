import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import { SvgBack, SvgConfirm, SvgMapLine, SvgSave } from "../../components/CustomIcons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Barbershop(props) {

    const data = props.route.params.data;

    console.log(props.route.params)

    const [ isToggle, setIsToggle ] = useState(true);

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
                        <TouchableOpacity style={[styles.toggleButton, { backgroundColor: isToggle ? '#23202e' : '#18161fc2' }]} onPress={() => { setIsToggle(true) }}>
                            <Text style={{ color: '#fff' }}>Descrição</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.toggleButton, { backgroundColor: !isToggle ? '#23202e' : '#18161fc2' }]} onPress={() => { setIsToggle(false) } }>
                            <Text style={{ color: '#fff' }}>Avaliações</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.schedulingButton}>
                        <Text style={styles.schedulingButtonText}>Agendar</Text>
                        <SvgConfirm pathColor="#000" />
                    </TouchableOpacity>
                </View>

                <View style={{ display: isToggle ? 'flex' : 'none' }}>
                    <View style={styles.box}>
                        <Text style={styles.text}>{description}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text}>Entre em contato:</Text>
                        <View style={{ backgroundColor: '#252525', width: '90%', height: 24, borderRadius: 8 }}></View>
                        <View style={{ backgroundColor: '#252525', width: '90%', height: 24, borderRadius: 8 }}></View>
                    </View>
                </View>

                <View style={{ display: !isToggle ? 'flex' : 'none' }}>
                    <View style={[styles.box, { flexDirection: 'row', alignItems: 'center', paddingVertical: 24 }]}>
                        <View style={{width: '56%', justifyContent: 'space-around', alignItems: 'center', gap: 2}}>
                            <Text style={styles.textOpacity}>CLASSIFICAÇÂO</Text>
                            <Text style={[styles.barbershopTitle, { marginTop: 4 }]}>4,8</Text>
                            <Text style={[styles.textOpacity, { marginBottom: 10 }]}>de 5</Text>
                            <TouchableOpacity>
                                <Text style={{color: '#D6D6D6', fontWeight: 700, fontSize: 12}}>TOQUE PARA AVALIAR ★</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{gap: 2}}>
                            <View style={styles.ratingLine}>
                                <Text style={[styles.text, {fontSize: 11}]}>5★</Text>
                                <View style={{ width: 100, height: 6, backgroundColor: '#2F2815', borderRadius: 50 }}>
                                    <View style={{ width: '75.6%', height: 6, borderRadius: 50, backgroundColor: '#FFE28C' }}></View>
                                </View>
                            </View>
                            <View style={styles.ratingLine}>
                                <Text style={[styles.text, {fontSize: 11}]}>4★</Text>
                                <View style={{ width: 100, height: 6, backgroundColor: '#2F2815', borderRadius: 50 }}>
                                    <View style={{ width: '24%', height: 6, borderRadius: 50, backgroundColor: '#FFE28C' }}></View>
                                </View>
                            </View>
                            <View style={styles.ratingLine}>
                                <Text style={[styles.text, {fontSize: 11}]}>3★</Text>
                                <View style={{ width: 100, height: 6, backgroundColor: '#2F2815', borderRadius: 50 }}>
                                    <View style={{ width: '6.7%', height: 6, borderRadius: 50, backgroundColor: '#FFE28C' }}></View>
                                </View>
                            </View>
                            <View style={styles.ratingLine}>
                                <Text style={[styles.text, {fontSize: 11}]}>2★</Text>
                                <View style={{ width: 100, height: 6, backgroundColor: '#2F2815', borderRadius: 50 }}>
                                    <View style={{ width: '3.9%', height: 6, borderRadius: 50, backgroundColor: '#FFE28C' }}></View>
                                </View>
                            </View>
                            <View style={styles.ratingLine}>
                                <Text style={[styles.text, {fontSize: 11}]}>1★</Text>
                                <View style={{ width: 100, height: 6, backgroundColor: '#2F2815', borderRadius: 50 }}>
                                    <View style={{ width: '5.8%', height: 6, borderRadius: 50, backgroundColor: '#FFE28C' }}></View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <ScrollView style={{ backgroundColor: '#1c1c1ca1', paddingHorizontal: 16, paddingVertical: 20, marginTop: 24, borderRadius: 8}} horizontal={true}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#1B1A1D', width: 200, height: 70, marginRight: 16, alignItems: 'center', justifyContent: 'space-around', borderRadius: 6}}>
                            <Text style={[styles.text]}>4/5★</Text>
                            <View style={{ gap: 5}}>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#1B1A1D', width: 200, height: 70, marginRight: 16, alignItems: 'center', justifyContent: 'space-around', borderRadius: 6}}>
                            <Text style={[styles.text]}>4/5★</Text>
                            <View style={{ gap: 5}}>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#1B1A1D', width: 200, height: 70, marginRight: 16, alignItems: 'center', justifyContent: 'space-around', borderRadius: 6}}>
                            <Text style={[styles.text]}>4/5★</Text>
                            <View style={{ gap: 5}}>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#1B1A1D', width: 200, height: 70, marginRight: 16, alignItems: 'center', justifyContent: 'space-around', borderRadius: 6}}>
                            <Text style={[styles.text]}>4/5★</Text>
                            <View style={{ gap: 5}}>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', backgroundColor: '#1B1A1D', width: 200, height: 70, marginRight: 16, alignItems: 'center', justifyContent: 'space-around', borderRadius: 6}}>
                            <Text style={[styles.text]}>4/5★</Text>
                            <View style={{ gap: 5}}>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                                <View style={{width: 120, height: 4, borderRadius: 2, backgroundColor: '#262628'}}></View>
                            </View>
                        </View>
                    </ScrollView>
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
        marginTop: 36,
        marginBottom: 18,
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
        paddingVertical: 12,
    },
    titleContainer: {
        width: '74%',
        gap: 4,
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
        borderTopColor: '#D9D9D9',
        paddingTop: 15,
        marginTop: 10
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
        backgroundColor: '#1c1c1ca1',
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 8,
        gap: 10
    },
    ratingLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
    },
    textOpacity: {
        color: '#999',
        fontSize: 12,
        fontWeight: 700,
    }
});