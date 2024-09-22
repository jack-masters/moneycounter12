const port = 9002

import express, { request, response } from "express";
import session from "express-session";
import crypto from 'crypto-js';
import { makeUpperLowerNumberCode, makeUpperNumberCode } from "./functions/CodeFunctions.js"
import { v4 as uuid } from 'uuid';
import { HomeLoginPage } from "./html/login/HomeLogin.js";
import { mainParentHomePage } from "./html/parent/mainHome.js";
import { ChildLoginPage } from "./html/login/ChildLogin.js";
import cookieParser from "cookie-parser";
import pkg from 'express-openid-connect';
const { auth, requiresAuth } = pkg;

const config = {
  authRequired: false, 
  auth0Logout: true,
  secret: 'Xiqwuehr725y9u32rjiof239r-238rjcoj_EiSHZ5M5q9ueJdrKKYUtGVOjH6xdfcESASDJjdiso932qbXmEMHSJDHFJWQO29a523TJusfjksdfo3o2fbI',
  baseURL: 'https://9000-idx-money-counter-1726936765780.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev',
  clientID: 'NVsIBxT1HyX68cYESn2FmUHyFSOJbuOL',
  issuerBaseURL: 'https://dev-a76hg03tiporhjoo.us.auth0.com',
  attemptSilentLogin: false,
  routes: {
    login: false
  }
};

const app = express();

app.use('/public', express.static('./public/'))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(auth(config));

const ChildLoginCodes = [
    {
        ChildName: "Demitri",
        LoginID: "8AN6I8",
        Age: "3",
        ParentID: "1"
    },
];

app.get("/", (request, response) => {
    //if (request.oidc.isAuthenticated()) {
        //response.redirect("/parent/portal");
    //} else {
        //response.redirect("/login");
    //}

    response.send("Hello Chat")
});

app.get("/login", (request, response) => {
    response.send(HomeLoginPage());
})

app.get('/parent/login', (request, response) =>
    response.oidc.login({
        returnTo: '/parent/portal',
        authorizationParams: {
            redirect_uri: 'https://9000-idx-money-counter-1726936765780.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev/callback',
        },
    })
);

app.get('/parent/logout', (req, res) => {
    res.oidc.logout({
        returnTo: "https://9000-idx-money-counter-1726936765780.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev",
    });
});
 
app.get("/parent/portal", requiresAuth(), (request, response) => {
    response.send(mainParentHomePage(request.oidc.user));
})

app.get("/parent/create/ChildJoinCode", requiresAuth(), (request, response) => {
    const NewCode = makeCode
})


app.get("/child/login", (request, response) => {
    response.send(ChildLoginPage());
});

app.get("/child/auth", (request, response) => {
    let firstname = request.body.firstname;
    let age = request.body.age;
    let loginid = request.body.loginid;

    if (firstname && age && loginid) {

    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});