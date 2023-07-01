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
                    <Text style={[estilos.Texto2,{width:162}]}>Nome de Usuario</Text>
                    <Text style={estilos.Texto2}>Jaiden Bradstreet</Text>
                   
                </TouchableOpacity>

                <TouchableOpacity style={estilos.minicaixas}>
                    <Text style={[estilos.Texto2,{width:162}]}>Tag de Usuário</Text>
                    <Text style={estilos.Texto2}>@branestr</Text>
                   
                </TouchableOpacity>

                <TouchableOpacity style={estilos.minicaixas}>
                    <Text style={estilos.Texto2}>Gênero</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={estilos.minicaixas}>
                    <Text style={estilos.Texto2}>Segurança</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={estilos.minicaixas}>
                    <Text style={estilos.Texto2}>Personalização</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={estilos.minicaixas}>
                    <Text style={estilos.Texto2}>Configurações e Suporte</Text>
                    
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

        height:200,

    },
    caixa3:{
      
        height:400,
    },
    Texto1:{
        color:'#fff',
        fontSize:20,
    },
    minicaixas:{
        borderBottomWidth:0.5,
        borderTopWidth:0.2,
        borderColor:'#B8BBC2',
        paddingHorizontal:18,
        paddingVertical:11,
        height:50,
        flexDirection:'row',
        backgroundColor:'#0C0B0F'
    },
    Texto2:{
        color:'#fff',
        

    },
});