# Grocery List App

![GLA Firebase Screenshot](https://my-portfolio-screens.s3.ca-central-1.amazonaws.com/gla-firebase/gla-firebase-screen-lg.png)

## Summary

Real-world grocery list application on steroids that I use every day. Features full CI/CD pipeline with Github Actions, Firebase Auth for email and Google SSO sign-in, and persisting data with Firebase Auth. Demo is deployed to AWS S3 bucket with CloudFront Distribution and custom subdomain.

## Core Features

- User input validation with custom Regexes
- Notifications with React Toastify
- Yarn instead of NPM
- Auth State handled by useContext
- Firestore Database
- Firebase Auth
- React/Tanstack Query and Mutation
- List cached using useMemo hook
- Vitest for testing with jest-compatible syntax
- Pre-commit linting and unit tests with Husky

## Scripts:

- Development Server: `yarn run dev`
- Build for Production: `yarn run build`
- Test with Vitest: `yarn run test`
- Auto Test with Vitest: `yarn run test:auto`
- Run Eslint (Standard): `yarn run lint`
- Run Eslint (Standard) auto-fix: `yarn run lint:fix`
- Prepare with Husky `yarn run prepare`

## Development and Firebase Setup

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

## Deployment

This app is designed to deploy straight to a AWS S3 bucket via Github Actions and assumes you already have an AWS IAM account and access key setup with the proper policies for S3 read/write and CloudFront invalidations.

1. Configure S3 bucket for public access (public access turned off) and enable static web hosting - set index.html as both index document and error document. Includes the following bucket policy, substituting your bucket name.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
    ]
}
```

2. Add CloudFront distribution to S3 bucket in AWS Console or AWS CLI and be sure to set index.html as the default root object.

3. Setup the following repository secrets in Github Actions:

- AWS_ACCESS_KEY_ID (Access Key for AWS IAM)
- AWS_SECRET_ACCESS_KEY (AWS Secret Access Key)
- AWS_CF_DISTRIBUTION (AWS CloudFront Distribution)
- AWS_REGION (AWS Region eg. ca-central-1)
- AWS_S3_BUCKET (AWS Bucket Name)
- VITE_API_KEY (Firebase API Key)
- VITE_APP_ID (Firebase App ID)
- VITE_AUTH_DOMAIN (Firebase Auth Domain)
- VITE_MESSAGING_SENDER_ID (Firebase Messaging Sender ID)
- VITE_PROJECT_ID (Firebase Project ID)
- VITE_QUERY_DEVTOOLS (Set to false)
- VITE_STORAGE_BUCKET (Firebase Storage Bucket)

4. Merge into main branch, and Github Actions will build, test and deploy application.

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
