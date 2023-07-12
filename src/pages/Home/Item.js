import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Item(props) {

    const { data, barbershopImage } = props;    

    const navigation = useNavigation();

    return (
        <View style={styles.barbershopContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Barbershop", {data: props})}>
                <Image
                    style={styles.barbershopImage}
                    source={barbershopImage}
                />
            </TouchableOpacity>
            <Text style={styles.barbershopTitle}>{data.name}</Text>
            <Text style={styles.barbershopText}><Text style={{ color: "#4BDEAB" }}>★ {data.stars}</Text> ({data.reviews}) - {data.type}</Text>
            <TouchableOpacity>
                <Text style={styles.barbershopTextButton}>Clique para saber mais</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    barbershopContainer: {
        width: 200,
        marginRight: 24,
        marginBottom: 12
    },
    barbershopImage: {
        width: 200,
        height: 130,
        borderRadius: 16,
        backgroundColor: '#1C1C1C'
    },
    barbershopTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700,
        marginTop: 6,
    },
    barbershopText: {
        color: '#999999',
        fontSize: 16,
        fontWeight: 400,
    },
    barbershopTextButton: {
        color: '#999999',
        fontSize: 13,
        fontWeight: 400,
        textDecorationLine: 'underline'
    }
});