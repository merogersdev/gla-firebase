# Grocery List App

![GLA Firebase Screenshot](https://my-portfolio-screens.s3.ca-central-1.amazonaws.com/gla-firebase/gla-firebase-screen-lg.png)

## Goal

Testing React + Firebase as an alternative to the MERN stack, and improve application as I learn more. Demo deployed to AWS via Github Actions.

## Core Features

- Add/Delete Items
- Notifications with React Toastify
- Deployment via Docker Compose
- Yarn instead of NPM
- Auth State handled by useContext
- Firestore Database and @tanstack Query
- Supports both Email/Password authentication as well as Google SSO.
- List cached using useMemo hook

## Development

1. Sign up for [Firebase](https://firebase.google.com/) and create Web App.
2. Enable Firebase Auth (using both Email and Password & Google Auth)
3. Under Firestore Database rules, copy/paste the following:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Grocery Items
    match /items/{item} {
    	allow read;
      allow create: if request.auth != null;
    	allow delete: if request.auth != null;
      allow update: if request.auth != null;
    }

    // Users
    match /users/{user} {
    	allow read;
    	allow create;
    	allow update: if request.auth.uid == user
    }
  }
}

```

4. Clone repository and copy example.env to .env and add your Firebase application credentials

### To start development server, run:

`yarn run dev`

## Production

### Docker Deployment

This app is designed to be deployed via docker container to your favourite Cloud provider.

1. Copy example.docker-compose.yml to docker-compose.yml and add Firebase application credentials to the environment section.
2. To build image and deploy, use `yarn run deploy`.

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
