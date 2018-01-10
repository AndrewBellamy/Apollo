# Apollo

Todo App, combining Angular 2, Angularfire2, Firebase Auth and Database. Currently hosted [here](https://apollo-ed09e.firebaseapp.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## What to do

- Clone the project
- Install Dependencies
- Create Firebase Project in your firebase console
- Create 'firebase.ts' file in '/enviroments' and enter the following code: 
'''
export const firebase = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
}
'''
- Paste in your firebase project credentials

## To deploy

- 'npm install firebase-tools'
- 'ng build --prod'
- 'firebase login'
- 'firebase init'
  - Select both **Hosting** and **Database**
  - Keep default for database auth rules
  - Public hosting folder should be: _dist_
  - **Do not overwrite _index.html_ in dist**
- 'firebase deploy'

