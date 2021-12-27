        // prmissionNot(confirmation)
        firebase.initializeApp({
            apiKey: "AIzaSyClbT8G2qsZyAoNRYUVHWoHoN4pavEILaw",
            authDomain: "notification-7c8f9.firebaseapp.com",
            projectId: "notification-7c8f9",
        });
        
        var db = firebase.firestore();

        var body;
        var title;
        

        db.collection("menssage").onSnapshot((querySnapshot) =>{
            querySnapshot.forEach((doc) =>{
                body = doc.data().body
                title = doc.data().title ; 
                spawnNotification(body, title)
            })
          } )