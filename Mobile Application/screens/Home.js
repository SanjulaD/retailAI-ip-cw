import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import {dummyData,COLORS,SIZES, FONTS, icons, images} from '../constants'

function renderHeader(){
    return (
        <View
            style={{width: '100%',
            height:290,
            ...styles.shadow
        }}
        >
<ImageBackground
    source={images.banner}
    resizeMode='cover'
    style={{flex: 1, alignItems: 'center'}}
>
<View style={{marginTop:SIZES.padding*2}}></View>
{/* Header bar  */}
<View
    style={{
        marginTop:SIZES.padding*2,
        width:'100%',
        alignItems:"flex-end",
        paddingHorizontal:SIZES.padding
    }}
>
<TouchableOpacity
style={{
    width:35,
    height:35,
    alignItems:'center',
    justifyContent: 'center'
}}

onPress={()=>console.log("Notificationn click")}
></TouchableOpacity>

</View>
{/* balance */}
{/* Trending */}
</ImageBackground>









        </View>





    )
}


const Home = ({ navigation }) => {
    return (
       <ScrollView>
<View style={{flex: 1,paddingBottom:130}}>
    {renderHeader()}
</View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default Home;