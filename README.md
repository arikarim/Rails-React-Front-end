# React-Rails Authentication Front-End
<p align="center">
    <img src="src/images/react.png" alt="Logo" width="150" height="100">
  <h3 align="center">React-Rails --> [React]</h3>

  <p align="center">
This is prepared React authentication `part of React-Rails authentication` where components and complete logic are built and ready to use.
  </p>
</p


## Screenshots of the app.

![image](./src/images/screen.png)



Note: This demo of this project combined with [Rails-back](https://github.com/arikarim/React-Rails-Back-End).
And also note that the live demo may not work well on github pages as react-router have some problems on reloading.
to solve thisb you can upload it to heroku or any other hosts.

[Live Demo Link](http://arikarim.me/Rails-React-Front-end/)

## Built With

- React

- Bootstrap
 
- Css

## Prerequisities

node should be installed in your machine.


## Getting Started

**To get this project set up on your local machine, follow these simple steps:**

**Step 1 React-part**<br>
 - Clone the repo to your local machine.

 - cd inside the project directory.

  - npm install

 - run npm run start
 
 - Change axios request links to `http://localhost:3000` if your rails is in development or change it to your back-end link if your rails is in production. you can find these links in `App, Login, Logout and Signup` components.

**Step 2 Rails Part**<br>

In order to use this project you should have the back end prepared, I will put the link to the Rails back-end [Here](https://github.com/arikarim/React-Rails-Back-End) and all you have to to is follow these simple : 

- Clone the Rails repo and cd inside the project.

- Run `Rake secret`, this will generate a secret key, hold it for the next step.

- Create a `.env` file in the root of the project and inside it put this `DEVISE_JWT_SECRET_KEY = < your secret key from previuos step >`

- Inside `config/initializers/cors.rb` if you use it locally you dont need to do this but if you want to use it from specific domain you should change line 12 from `origins '*'` to `origins 'Your front-end domain here'`.

- Note: If you publish this website and upload it to heroku, do not forget to add a `Config variable` to your app in heroku, simply go to heroku, go to your app, click on setting, click on config vars then put your `DEVISE_JWT_SECRET_KEY` then your secret key.


## 🤝 contributing

## Author

- GitHub: [@arikarim](https://github.com/arikarim)
- LinkedIn: [AriKarim](https://www.linkedin.com/in/ari-karim-523bb81b3)

## 🙋‍♂ show your support

give a ⭐️ if you like this project!

## 📝 license



This project is [MIT](lisenced)
