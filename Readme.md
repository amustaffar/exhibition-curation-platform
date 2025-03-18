## Exhibition Curation Platform

- Author: Ahmad Fadhlan Mustaffar.
- Date: 3 March 2025. *Revised 19 March 2025*.
- A project commissioned by Launchpad.
- Developed as a web app: [project link](https://famous-gecko-544ed5.netlify.app/).

## Summary of the Project

This platform enables users to explore virtual exhibitions from combined collections of antiquities and fine art. It will serve researchers, students and fine art enthusiasts, providing a searcheable and interactive experience of the collections.

### Tech stack

- Programming language: TypeScript
- Framework: React.js
  - Design library: Material UI (MUI)

### Collection APIs

- [The Art Institute of Chicago](https://www.artic.edu/).
- [Statens Museum for Kunst - National Gallery of Denmark](https://www.smk.dk/en/).

*These RESTful APIs are always accessible and well-documented*

### Platform features

- Browse artworks with pagination (currently limited to 12 per page).
- Search or filter artworks using keywords via the search field.
- Sort artworks based on publication date.
- View details for each artwork individually (full size image display, author, art title and publication date).
- Add or remove artworks to an exhibition
  - Ability to create multiple exhibitions, formed from all available gallery APIs
  - Exhibitions can be shared with other people using a URL
  - When building an exhibition state is stored locally to easy navigation between it and the main page. Exhibitions are therefore stored in browser's local storage until users delete them from the platform's landing page

#### A note on sort and filter artworks

Popularity is the default sort provided by both APIs, it is effectively their most popular or promoted artworks, defined by the institutions themselves. We have not added filtering as users can search instead

## Installation instruction

To run this repo locally:
1. clone the repository.
2. *run* `npm install`
3. *run* `npm run dev`

### Minimum requirements

Refer to package.json file for the full list of dependencies:
- Material UI v6.4.4.
- Axios v1.7.9.
- React v.19.0.0.

## Future work

- The current APIs provide sorting by publication date only. We will add in other sorting parameters in the near future.
- The functionality to share an exhibition via social media platforms (such as Instagram or Facebook).