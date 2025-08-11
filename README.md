# tucamano

*tucamano* is a web app designed to help users learn sign languages.  
It allows you to search for signs across different sign languages, watch videos from **signdict.org**, and create flashcards to practice and memorize them.

Currently, *tucamano* is still in the **prototype stage** – many features are planned but not yet fully implemented.

---

## Features

- Search for signs by entering a word  
- Change sign language
- Save signs in to flash cards  
- Learn using videos 
---

## Requirements

Before you install and run this project, make sure you have the following:

- nvm (Node Version Manager) – optional but recommended
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
   ```  
- Node.js (version 22 or higher)
- npm (comes with Node.js)
- ionic (7 or higher)


## Installation

*(This setup assumes a typical web app project. Adjust if your setup differs.)*

1. Clone the repository:  
   ```bash
   git clone https://github.com/Ninosaurier/tucamano.git
   ```

2. Change directory:  
   ```bash
   cd tucamano
   ```

2. Install dependencies (Node.js required):  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   ionic serve -- --proxy-config proxy.conf.json
   ```

4. The app should then be available locally, for example at `http://localhost:8100`

---

## License

This project is licensed under the **GPL-3.0 License**.  
You are free to use, modify, and redistribute the code, as long as any modifications are also released under the same license.  
See the [LICENSE](LICENSE) file for details.

---

## Prototype Status

*tucamano* is still an **early prototype**.  
Some features are not yet implemented, and the app is primarily intended for experimentation and further development. Contributions and feedback are very welcome!

---

## Summary

| Topic | Description |
|-------|-------------|
| What is *tucamano*? | Web app for learning sign languages (search, videos, flashcards) |
| Installation | Clone → `npm install` → `npm start` |
| License | GPL-3.0 |
| Development status | Prototype – many features still in progress |

---
