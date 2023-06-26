import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Barbershop(props) {

    const { id, barbershopName, barbershopStars, barbershopImage, barbershopReviews, barbershopType } = props;    

    return (
        <View style={styles.barbershopContainer}>
            <Image
                style={styles.barbershopImage}
                source={barbershopImage}
            />
            <Text style={styles.barbershopTitle}>{barbershopName}</Text>
            <Text style={styles.barbershopText}><Text style={{ color: "#4BDEAB" }}>★ {barbershopStars}</Text> ({barbershopReviews}) - {barbershopType}</Text>
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