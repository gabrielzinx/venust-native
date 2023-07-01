import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign,  } from '@expo/vector-icons';
export default function EditProfile(){
    return(

        <View style={estilos.container}>
            <View style={estilos.caixa1}>
                <TouchableOpacity>
                <MaterialIcons name="arrow-back-ios" size={30} color="#fff" />
                    </TouchableOpacity>
                <Text style={estilos.Texto1}>Editar</Text>

                <TouchableOpacity>
                <AntDesign name="check" size={30} color="#fff" />
                    </TouchableOpacity>                

            </View>
            <View style={estilos.caixa2}>

            </View>
            <View style={estilos.caixa3}>
                <TouchableOpacity style={estilos.minicaixas}>
                    <Text style={estilos.Texto2}>UWU</Text>
                    <Text style={estilos.Texto2}>UWU</Text>
                   
                </TouchableOpacity>
                
            </View>

        </View>

    );
}
const estilos = StyleSheet.create({
    container:{
        backgroundColor:'#0A090D',
        flex:1,    
    },
    caixa1:{
        height:100,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15,
    },
    caixa2:{
        backgroundColor:'blue',
        height:200,

    },
    caixa3:{
        backgroundColor:'gray',
        height:400,
    },
    Texto1:{
        color:'#fff',
        fontSize:20,
    },
    minicaixas:{
        borderColor:'#fff',
        padding:10,
        height:50,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    Texto2:{
        color:'#fff'
    },
});