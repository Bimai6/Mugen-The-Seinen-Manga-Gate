Mugen: The Seinen Manga Gate
Mugen: The Seinen Manga Gate is an interactive catalog website that showcases a selection of curated seinen manga titles. With its dark and intense design, Mugen offers manga enthusiasts a unique way to explore information about each manga, including detailed descriptions and immersive background visuals.

💡Initial Idea:
Make a right to left oriented website to offer an unique design. Manga is read right to left, so it was ideal. Seinen demography were selected to give a "darker" looking to the website. Mugen was selected as the title, because it matched with the idea of the logo, making a red square to emphasize the attention to the right-top, kind of a "infinite gate to the manga world". 

🎨 Project Colors:
The aesthetic of Mugen is defined by a minimalist color palette:

White: for clean, readable typography.
Black: for a bold, dark background that highlights content.
Red and Bordeaux: accent colors to reflect the mature and intense themes of seinen manga.

🌟 Features:
Seinen Manga Catalog: Browse through a hand-picked selection of titles in the seinen genre.
Interactive Manga Cards: Each manga has a detailed card displaying the following information:
Cover Image
Title
Year of Release
Status (e.g., Finished or Ongoing)
Genre
Edition (e.g., specific publisher or special edition)
Number of Volumes (Tomes)
Mangaka (Author)
Description: A brief synopsis of the manga's story and themes
Dynamic Backgrounds: When a manga is selected, the background transforms into panels from that manga, creating an immersive experience.
Example of Manga Data (JSON Format)
Each manga entry is defined in the mangas.json file with the following structure:

json

{
    "frontPage": "",
    "title": "",
    "year": "",
    "state": "",
    "genre": "",
    "edition": "",
    "nTomes": "",
    "mangaka": "",
    "description": ""
}

📂 Project Structure
The project is organized as follows:

CARTEERA_MLG/
├── images/
│   └── [Manga cover images, e.g., blame.jpeg]
├── json/
│   └── mangas.json           # JSON file containing manga data
├── .gitignore                # Git ignore file
├── index.html                # Main HTML file
├── main.js                   # JavaScript for interactivity and data handling
├── package.json              # NPM package configuration
├── package-lock.json         # NPM package lock file
├── README.md                 # Project README
└── styles.css                # CSS file for styling

🔧 Tech Stack
Frontend:
HTML5, CSS3, JavaScript
Development Environment:
Visual Studio Code
Design Tools:
Photoshop (used for creating and editing manga background panels)

🌐 Links
GitHub: https://github.com/Bimai6
Contact: bimai6@gmail.com
Mugen: The Seinen Manga Gate – Your immersive gateway into the world of seinen manga.
