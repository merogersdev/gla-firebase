# Grocery List App

![GLA Firebase Screenshot](https://my-portfolio-screens.s3.ca-central-1.amazonaws.com/gla-firebase/gla-firebase-screen-lg.png)

## Quick Summary

Real-world grocery list application with SSO and persistent database via Firebase.

## Goal

Testing React + Firebase as an alternative to the MERN stack, and improve application as I learn more. Demo deployed to AWS S3 + CloudFront via Github Actions.

## Core Technologies

- Vite v5.1.4
- React v18.2
- Tanstack Query v5.24
- Sass v1.71
- Firebase v10.8

## Initial Setup (Development)

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

4. Clone or fork repository and copy example.env to .env and add your Firebase application credentials

5. To start the development server, run `yarn run dev`

## Scripts

- Development Server: `yarn run dev`
- Build for Production: `yarn run build`
- Production Preview: `yarn run preview`

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
