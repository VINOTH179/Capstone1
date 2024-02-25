const movies = [
    {
        id: "1",
        name: "Ayalaan",
        image: "https://assets.gadgets360cdn.com/pricee/assets/product/202302/Ayalaan_1675782610.jpg",
        screen: "2D IMAX, 3D IMAX",
        language: "English,Tamil,Hindi,Malayalam,Telungu",
        certificate: "Tamil U/A",
        rating: "8.6",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "2",
        name: "Salaar:Part 1–Ceasefire",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg/220px-Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
        screen: "2D IMAX",
        language: "Tamil,Hindi",
        certificate: "Tamil U/A",
        rating: "8.6",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
     
        id: "3",
        name: "Lover",
        image: "https://static.toiimg.com/photo/107547727.cms?imgsize=10240",
        screen: "2D IMAX",
        language: "Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "8.6",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
       
        id: "4",
        name: "Parking",
        image: "https://m.media-amazon.com/images/M/MV5BN2E2OTM5ODUtMmJkZS00ZDBlLTg0NzYtMTA3ZTAwZjViMDRhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
        screen: "2D IMAX",
        language: "Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "7.6",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "5",
        name: "Captain Miller",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUOXf6B0NljfQsbJoXbRqrT2sybQlV5Gjdg&usqp=CAU",
        screen: "2D IMAX,3D IMAX",
        language: "English,Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "8.2",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "6",
        name: "Chithha",
        image: "https://m.media-amazon.com/images/M/MV5BMWZkMjE2OTktOGQ4Zi00OWQ1LTgwNjAtZTFjOGExYWQyMTU5XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
        screen: "2D IMAX",
        language: "Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "8.1",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "7",
        name: "Leo",
        image: "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.7",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
        
        id: "8",
        name: "Takkar",
        image: "https://m.media-amazon.com/images/M/MV5BNzhhYTUyMWYtMzA0My00ODQ1LWJhNjktYzg0NjJkZDI2YzhmXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_.jpg",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.3",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
   
        id: "9",
        name: "Sembi",
        image: "https://th.bing.com/th/id/OIP.mJY1YBKIl8WwLPjhxzamdgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.5",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
       
        id: "10",
        name: "Vaathi",
        image: "https://th.bing.com/th/id/OIP.U5q7HFNPeTkkPbps5JBEHwHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.6",
        theatre: [
            "Sathyam Cinemas A/C",
            "Nexus Vijaya Mall A/C",
            "Luxe Cinemas",
            "PVR Grand Galada"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    }
]