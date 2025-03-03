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
- Add or remove artworks to an exhibition
  - Exhibitions can be shared with other people using a URL
  - When building an exhibition state is stored locally to easy navigation between it and the main page

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