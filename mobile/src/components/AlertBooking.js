import React, { useEffect } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import socketio from 'socket.io-client'; 

export default function AlertBooking(){
  
  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio('http://192.168.1.26:3001', {
        query: { user_id },
      });

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
      });
    })
  }, []);

  return (<> </>)
}