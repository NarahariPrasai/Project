import logo from './logo.png'
import search from './search.png'
import profile from './profile.jpg'
import cart from './cart.webp'
import menu from './menu.png'
import dropdown from './dropdown.png'
import Book1 from './Book1.jpg'
import Book2 from './Book2.jpg'
import Book3 from './Book3.jpg'
import Book4 from './Book4.jpeg'
import Book5 from './Book5.jpg'
import Book6 from './Book6.jpg';
import Reading2 from './Reading2.jpg'
import shipping from './shipping.jpg';
import security from './security.png';
import support from './support.png';
import cross from './cross.png';
import dullstar from './dullstar.png';
import staricon from './staricon.png';
import binicon from './binicon.png'
import esewa_logo from './esewa_logo.jpg'

export const assets = {
    logo,
    search,
    profile,
    cart,
    dropdown,
    menu,
    Reading2,
    shipping,
    security,
    support,
    cross,
    dullstar,
    staricon,
    binicon,
    esewa_logo
}

export const products = [
    {
        Book_id : 1,
        ISBN_NO : "1234",
        Title : "The Great Gatsby",
        DESCRIPTION: "The Great Gatsby is a novel set in the 1920s (the Jazz Age) in the United States. It tells the story of the mysterious millionaire Jay Gatsby and his obsession with rekindling his past romance with Daisy Buchanan.",
        STOCK: 100,
        AUTHOR: "F.Scott Fitzgerald",
        POSTER: [Book1],
        PRICE: 700,
        Bestseller: true ,
        Published_date: "12345",
        Rating: 4,
        Genres: "fiction"
    },
    {
        Book_id : 2,
        ISBN_NO : "1235",
        Title : "A Court of Thorns and Roses",
        DESCRIPTION: "A Court of Thorns and Roses is a fantasy romance novel that follows Feyre Archeron, a young huntress who kills a wolf in the woods—only to discover it was a magical faerie in disguise. As punishment, she is taken to the faerie lands of Prythian.",
        STOCK: 105,
        AUTHOR: "Sarah J. Maas",
        POSTER: [Book2],
        PRICE: 750,
        Bestseller: true ,
        Published_date: "12345",
        Rating: 4,
        Genres: "non-fiction"
    },
    {
        Book_id : 3,
        ISBN_NO : "1236",
        Title : "Don Quixote",
        DESCRIPTION: "Don Quixote is a classic novel that follows an aging man, Alonso Quixano, who becomes obsessed with reading tales of knights. He decides to become a knight himself, taking the name Don Quixote, and sets out on adventures to revive chivalry.",
        STOCK: 150,
        AUTHOR: "Miguel de Cervantes",
        POSTER: [Book3],
        PRICE: 800,
        Bestseller: true,
        Published_date: "12345",
        Rating: 4,
        Genres: "romance"
    },
    {
        Book_id : 4,
        ISBN_NO : "1001",
        Title : "1984",
        DESCRIPTION: "1984 is a dystopian novel set in a totalitarian society ruled by a powerful government known as the Party, led by Big Brother. The story follows Winston Smith, a man who secretly rebels against the regime.",
        STOCK: 160,
        AUTHOR: "George Orwell",
        POSTER: [Book4],
        PRICE: 550,
        Bestseller: true,
        Published_date: "12345",
        Rating: 4,
        Genres: "mystery"
    },
    {
        Book_id : 5,
        ISBN_NO : "1002",
        Title : "Gone with the Wind",
        DESCRIPTION: "Gone with the Wind is set during the American Civil War and Reconstruction era. It follows Scarlett O’Hara, a strong-willed Southern woman, as she struggles to survive war, loss, and changing society.",
        STOCK: 135,
        AUTHOR: "Margaret Mitchell",
        POSTER: [Book5],
        PRICE: 650,
        Bestseller: true,
        Published_date: "12345",
        Rating: 4,
        Genres: "sci-fi"
    },
    {
        Book_id : 6,
        ISBN_NO : "1003",
        Title : "War and Peace",
        DESCRIPTION: "War and Peace is a historical novel set during the Napoleonic Wars. It follows several Russian families, including the Rostovs and Bolkonskys, as they experience love, war, and personal growth.",
        STOCK: 200,
        AUTHOR: "Leo Tolstoy",
        POSTER: [Book6],
        PRICE: 800,
        Published_date: "12345",
        Rating: 4,
        Genres: "sci-fi"
    },
]

