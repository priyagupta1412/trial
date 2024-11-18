// App.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import LoginForm from '../Chat/LoginForm';
import CardRoom from "../Chat/CardRoom";
import ChatRoom from '../Chat/ChatRoom';

const firebaseConfig = {
// paste your firebaseConfig here
 apiKey: "AIzaSyC0AoFHZKmQt3tvlYDF26waPX4B71jo_xc",
  authDomain: "freehub-2cd6b.firebaseapp.com",
  projectId: "freehub-2cd6b",
  storageBucket: "freehub-2cd6b.appspot.com",
  messagingSenderId: "578750847023",
  appId: "1:578750847023:web:2fe4d9e36748dedbbf8eda",
};

// Initialize Firebase

// you need to initialize here
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Get a reference to the database service
  const database = firebase.database();

function createChatRoom(participantId, username) {
  const chatRoomId = [participantId, username].sort().join('-');
  const chatRef = database.ref('chats').child(chatRoomId);
  chatRef.set(null);
}

function App() {
  const [username, setUsername] = useState('');
  const [participants, setParticipants] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  useEffect(() => {
    const participantsRef = database.ref('participants');

    participantsRef.on('value', (snapshot) => {
      const participantsData = [];
      snapshot.forEach((childSnapshot) => {
        participantsData.push(childSnapshot.val());
      });
      setParticipants(participantsData);
    });

    return () => {
      participantsRef.off();
    };
  }, []);

  const handleLogin = (username) => {
    setUsername(username);
  };

  const handleChatStart = (participantId, participantName) => {
    const chatRoomId = [participantId, username].sort().join('-');
    const chatRef = database.ref('chats').child(chatRoomId);

    chatRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        setSelectedParticipant({ id: participantId, name: participantName });
      } else {
        createChatRoom(participantId, username);
        setSelectedParticipant({ id: participantId, name: participantName });
      }
    });
  };

  const handleCloseChat = () => {
    setSelectedParticipant(null);
  };

  return (
    <div>
      {username === '' ? (
        <LoginForm onLogin={handleLogin} />
      ) : selectedParticipant ? (
        <ChatRoom
          participantId={selectedParticipant.id}
          participantName={selectedParticipant.name}
          username={username}
          onClose={handleCloseChat}
        />
      ) : (
        <CardRoom participants={participants} onChatStart={handleChatStart} currentUser={username} />
      )}
    </div>
  );
}

export default App;