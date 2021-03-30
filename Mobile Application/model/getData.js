import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { COLORS, SIZES, FONTS} from '../constants'


class GetData extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {userCount: "..."};
      }

    componentWillMount() {
     
    

        // To Configure react native app with cloud of Google Firebase database !
        var config = {
            apiKey: "AIzaSyDPM-aQRZxWvH0p8tbs3ZRB2cgX406CDmc",
            authDomain: "livedb-5530b.firebaseapp.com",
            databaseURL: "https://livedb-5530b-default-rtdb.firebaseio.com",
            projectId: "livedb-5530b",
            storageBucket: "livedb-5530b.appspot.com",
            messagingSenderId: "861051012995",
            appId: "1:861051012995:web:ca5863626ff750cea3d8b6",
            measurementId: "G-R1E1TZ0ZNE"
        };
    
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
         }

        // To select data from firebase every time data has changed !
        firebase.database().ref('users').on('value', (data) => {
            console.log(data.toJSON());
        })

        // To Await 5 seconds to insert a new user
        setTimeout(() => {
            var starCountRef = firebase.database().ref('users/' + '004' );
            starCountRef.on('value', (snapshot) => {
                var   data = snapshot.val();       

                this.setState({userCount:data.age })
              console.log(data.age);     
              
            });
            }, 5000);
          
    }       
      
    render() {
      
        return (
            <View>
                <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h1 }}>
                    {this.state.userCount}
                   
                </Text>
            </View>
        )
    }
}

export default GetData;