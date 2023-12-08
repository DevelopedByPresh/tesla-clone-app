import React, {useState} from 'react'
import { ScrollView, View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'
import styles from './style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey,faLock, faUnlockAlt} from '@fortawesome/free-solid-svg-icons'
import Menu from "../menu/index"



const CartItem = ()=>{
    const [locked, setLocked] = useState(false)

    return(
        <View style={styles.CarContainer}> 
        <ImageBackground style={styles.image} source={require('../../assets/background.png')}/>
            <View style={styles.header}>
                <TouchableOpacity>
                <FontAwesomeIcon style={styles.icon}  icon={ faCog } size={24} />
                </TouchableOpacity>
           
                <Text style={styles.headerTitle}>PreshMobile</Text>

                <TouchableOpacity>
                <FontAwesomeIcon style={styles.icon} icon={ faToolbox }  size={24} />
                </TouchableOpacity>
               
           
            </View>

            <View style={styles.batterySection}>
                <Image source={require('../../assets/battery.png')} style={styles.battery}/>
                <Text style={styles.batteryText}>150 Ml</Text>


            </View>


            <View style={styles.status}>
                <Text style={styles.statusText}>Parked</Text>
    
            </View>


<ScrollView>
            <View style={styles.controls}>

            <TouchableOpacity>
            <View style={styles.controlsButton}>
            <FontAwesomeIcon style={styles.icon} icon={ faFan }  size={20} />
            </View>
            </TouchableOpacity>

     <TouchableOpacity>
            <View style={styles.controlsButton}>
            <FontAwesomeIcon style={styles.icon} icon={ faKey }  size={20} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setLocked(!locked)}>
            <View style={styles.controlsButton}>
            <FontAwesomeIcon style={styles.icon} icon={locked ? faLock : faUnlockAlt }  size={20} />
            </View>
            </TouchableOpacity>

            </View>
      
          
            <Menu/>
            </ScrollView>
            </View>
    )
}

export default CartItem