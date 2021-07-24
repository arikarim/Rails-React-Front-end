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



[Live Demo Link]http://arikarim.me/Rails-React-Front-end/)

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

**Step 2 Rails Part**<br>

In order to use this project you should have the back end prepared, I will put the link to the Rails back-end [Here](https://www.linkedin.com/in/ari-karim-523bb81b3) and all you have to to is follow these simple : 

- Clone the Rails repo and cd inside the project.

- Run `Rake secret` and hold it for the next step.

- Create a `.env` file in the root of the project and inside it put this `DEVISE_JWT_SECRET_KEY = < your secret key from previuos step >`

- Inside `config/initializers/cors.rb` if you it locally you dont need to do this but if you want to use it from specific domain you should change line 12 from `origins '*'` to `origins 'Your domain here'`.


## 🤝 contributing

## Author

- GitHub: [@arikarim](https://github.com/arikarim)
- LinkedIn: [AriKarim](https://www.linkedin.com/in/ari-karim-523bb81b3)

## 🙋‍♂ show your support

give a ⭐️ if you like this project!

## 📝 license



This project is [MIT](lisenced)
