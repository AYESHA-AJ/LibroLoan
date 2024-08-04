const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTulnEXanXVMaxMJH3FG-J0JUtHoVlhL7MTpA&s",
        "title": "The Violet Hour",
        "description": "A poignant novel about love, loss, and the intricate connections that define our lives.",
        "genre": "Fiction/Drama",
        "rating": 4.2,
        "price": 14,
        "createdAt": "2024-03-01"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAAo-ccqJp8N0Oa7w039EJFHjitzQ3mQniw&s",
        "title": "Lavender and Sunsets",
        "description": "A heartwarming story of friendship, healing, and finding hope in unexpected places.",
        "genre": "Romance/Contemporary",
        "rating": 4.5,
        "price": 16,
        "createdAt": "2024-03-05"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501136498/purple-hearts-9781501136498_hr.jpg",
        "title": "Purple Hearts",
        "description": "An epic tale of bravery, sacrifice, and enduring love set against the backdrop of war.",
        "genre": "Historical Fiction",
        "rating": 4.7,
        "price": 18,
        "createdAt": "2024-02-10"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFjcxYIg7H7TPyn5l5hb22kwTrliUMJFokA&s",
        "title": "Pink Mist",
        "description": "A raw and powerful exploration of the impact of war on soldiers and their families.",
        "genre": "Poetry/War",
        "rating": 4.3,
        "price": 15,
        "createdAt": "2024-06-15"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvp17nZ8li8Vr0nab44VIzg1-JYt81ShLqNQ&s",
        "title": "The Lilac Girls",
        "description": "An unforgettable story of love, redemption, and the resilience of the human spirit.",
        "genre": "Historical Fiction",
        "rating": 4.6,
        "price": 20,
        "createdAt": "2024-04-20"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://m.media-amazon.com/images/I/514HRbjQP5L._AC_UF894,1000_QL80_.jpg",
        "title": "Rose Quartz Dreams",
        "description": "A magical journey through dreams, where anything is possible and love conquers all.",
        "genre": "Fantasy/Romance",
        "rating": 4.4,
        "price": 17,
        "createdAt": "2024-08-25"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6HfqEvfz5exQtGm8pYhW4fP_tTiSWwnClA&s",
        "title": "Amethyst Horizon",
        "description": "A thrilling mystery that unravels secrets buried deep within a seemingly idyllic town.",
        "genre": "Mystery/Thriller",
        "rating": 4.5,
        "price": 19,
        "createdAt": "2024-04-30"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-eu.ssl-images-amazon.com/images/I/81elVMIlEdL._AC_UL600_SR600,600_.jpg",
        "title": "The Fuchsia Journey",
        "description": "An inspiring tale of self-discovery and the courage to follow one's dreams.",
        "genre": "Adventure/Contemporary",
        "rating": 4.2,
        "price": 15,
        "createdAt": "2024-08-01"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWmYTnzzbwGyuqNYbgcv8HTUPauBE_1WM6Q&s",
        "title": "Pink Lemonade Sky",
        "description": "A lighthearted romance that captures the essence of summer and first love.",
        "genre": "Romance/Comedy",
        "rating": 4.1,
        "price": 14,
        "createdAt": "2024-01-05"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85SWJfNEgB6KyDxfSoY8Bo5cy6yLEp3Ca2A&s",
        "title": "Lilac Wine",
        "description": "A beautifully written novel about the complexities of family, love, and forgiveness.",
        "genre": "Fiction/Family",
        "rating": 4.6,
        "price": 18,
        "createdAt": "2024-09-10",
        "upcoming": true
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
        "title": "House of Sky",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        "genre": "Comedy/Drama",
        "rating": 3,
        "price": 90,
        "createdAt": "2024-06-07"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
        "title": "Book Lovers",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "genre": "Action/Comedy/Crime/Drama",
        "rating": 4,
        "price": 100,
        "createdAt": "2024-05-14"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649848581i/60435878.jpg",
        "title": "Carrie Soto Is Back",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140,
        "createdAt": "2024-05-30"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg",
        "title": "Sea of Tranquility",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250,
        "createdAt": "2024-06-10"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
        "title": "Hidden Pictures",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-05-19",
    },
    {
        "id": crypto.randomUUID(),
        "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634068432i/59233594.jpg",
        "title": "The Final Gambit",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100,
        "createdAt": "2024-04-19",
        "upcoming": true
    },
    
]

function getAllBooks() {
    return data;
}
export { getAllBooks };