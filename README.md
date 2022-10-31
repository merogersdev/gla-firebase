# Grocery List App

Mini-Project

## Goal

Testing React + Firebase as an alternative to the MERN stack.

## Core Features

- Add/Delete Items
- Notifications with React Toastify
- Deployment via Docker
- Yarn instead of NPM
- State handled by useContext + useReducer

## Development

2. Sign up for [Firebase](https://firebase.google.com/) and create Web App.
1. Clone repository and create a .env file in the root directory. Add your App credentials to .env file:

/.env

```
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=

```

### To start development server, run:

`yarn run dev`

## Production

### Docker Deployment

This app is designed to be deployed via docker container to your favourite Cloud provider. The included Dockerfile first builds a production version of the app and deploys it via NGINX web server container.

To build docker image, from root directory run:

`docker build -t gla-firebase .`

### Manual Deployment

To create a production build of the app to deploy manually, run:

`yarn run build`

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Alpine Linux](https://img.shields.io/badge/Alpine_Linux-%230D597F.svg?style=for-the-badge&logo=alpine-linux&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
