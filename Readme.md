## Exhibition Curation Platform

- Author: Ahmad Fadhlan Mustaffar.
- Date: 3rd of March 2025.
- A project commissioned by Launchpad.
- Developed as a web app: [project link](https://famous-gecko-544ed5.netlify.app/).

## Summary of the Project

The platform enables users to explore virtual exhibitions from combined collections of antiquities and fine art. It will serve researchers, students and fine art enthusiasts, providing a searcheable and interactive experience of the collections.

### Collection APIs

- [The Art Institute of Chicago](https://www.artic.edu/).
- [Statens Museum for Kunst - National Gallery of Denmark](https://www.smk.dk/en/).

*These RESTful APIs are always accessible and well-documented*

### Platform features

- Browse artworks with pagination (limited to 12 per page).
- Search / filter artworks using the search field.
- Sort artworks based on publication date.
- View details for each artwork individually (full size image display, author, art title, publication date).
- Add to or remove items from a temporary collection of artworks from both museums.
- View the exhibition of the saved collection:
  - *The URL of each exhibition is permenantly saved, and can be copied or shared to view in any browsers*
  - *To edit an exhibition, simply open it and add/remove items accordingly, and copy/share the new URL*

## Installation instruction

To run this repo locally:
1. clone the repository.
2. *run* npm install.
3. *run* npm run dev.

### Minimum requirements

Refer to package.json file for the full list of dependencies:
- Material UI v6.4.4.
- Axios v1.7.9.
- React v.19.0.0.