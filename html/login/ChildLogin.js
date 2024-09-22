export function ChildLoginPage() {
    return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,minimum-scale=1">
            <title>Login</title>
            <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
            <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
            <link type="text/css" rel="stylesheet" href="https://9000-idx-money-counter-1726936765780.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev/public/login.css" />
          </head>
          <body>
          <div class="login">
          <h1>Login</h1>
          <form action="https://9000-idx-money-counter-1726936765780.cluster-p6qcyjpiljdwusmrjxdspyb5m2.cloudworkstations.dev/child/auth" method="post">
            <input type="text" name="firstname" placeholder="Firstname  Eg: Jack" id="firstname" maxlength="15"  minlength="2" required>
            <br>
            <input type="text" name="age" placeholder="Age  Eg: 5" id="age" maxlength="3" minlength="1" required>
            <br>
            <input type="text" name="loginid" placeholder="Login ID  Eg: 123456" id="loginid" maxlength="6" minlength="6" required>
            <input type="submit" value="Login">
          </form>
        </div>
          </body>
        </html>
    `;
}
