# SETTING UP A SESSION TOKEN

## `Prompt`

Give me a sample code for a react app to save session token and user information

## `Response`

Here's a sample code for a React app to save session token and user information:

```javascript
import React, { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  function handleLogin(token, user) {
    setToken(token);
    setUser(user);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", user);
  }

  function handleLogout() {
    setToken("");
    setUser("");
    sessionStorage.clear();
  }

  return (
    <div>
      {token ? (
        <div>
          <p>Welcome {user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
}

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.handleLogin(data.token, data.user);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

This code uses `sessionStorage` to save the token and user information. When the user logs in, the `handleLogin` function is called with the token and user information as arguments. The token and user information are then saved in state using `useState`. The `sessionStorage.setItem` method is used to save the token and user information in the session storage of the browser.

When the user logs out, the `handleLogout` function is called which clears the token and user information from state and session storage.

I hope this helps!

Source: Conversation with Bing, 4/16/2023
(1) How To Add Login Authentication to React Applications. <https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications>.
(2) What is the best way to manage a user's session in React?. <https://stackoverflow.com/questions/42420531/what-is-the-best-way-to-manage-a-users-session-in-react>.
(3) How to Authenticate Users With Tokens in a React Application. <https://betterprogramming.pub/how-to-authentication-users-with-token-in-a-react-application-f99997c2ee9d>

## `Prompt 2`

Does this sessionStorage expire

## `Response 2`

No, `sessionStorage` does not expire automatically. It lives and dies with your browser session and is not shared between tabs¹. A page session lasts as long as the tab or the browser is open, and survives over page reloads and restores³. 

I hope this helps!

Source: Conversation with Bing, 4/16/2023
(1) javascript - Expiration of sessionStorage - Stack Overflow. <https://stackoverflow.com/questions/15171711/expiration-of-sessionstorage>.
(2) Does sessionStorage expire? – KnowledgeBurrow.com. <https://knowledgeburrow.com/does-sessionstorage-expire/>.
(3) Window: sessionStorage property - Web APIs | MDN - Mozilla Developer. <https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage>.
(4) LocalStorage, sessionStorage - JavaScript. <https://javascript.info/localstorage>

## `Prompt 3`

how do you get session variables

## `Response 3`

To get session variables in PHP, you can use the PHP global variable `$_SESSION`¹. In JavaScript, you can access session variables using AJAX (jQuery for simpler implementation) and web service³. 

I hope this helps!

Source: Conversation with Bing, 4/16/2023
(1) PHP Sessions - W3School. <https://www.w3schools.com/php/php_sessions.asp>.
(2) How to access Session variables and set them in javascript?. <https://stackoverflow.com/questions/15519454/how-to-access-session-variables-and-set-them-in-javascript>.
(3) How to Use Sessions and Session Variables in PHP - Code Envato Tuts+. <https://code.tutsplus.com/tutorials/how-to-use-sessions-and-session-variables-in-php--cms-31839>.

## `Prompt 4`

if i was using a php api, write a code to generate the session token

## `Response 4`

Here's an example code to generate a session token in PHP:

```php
<?php
session_start();
$token = bin2hex(random_bytes(32));
$_SESSION['token'] = $token;
?>
```

This code starts a new PHP session and generates a random token using `random_bytes()` function and stores it in the `$_SESSION` global variable.

I hope this helps!

## `Prompt 5`

so the idea is to save this session token locally in react so the user is always logged in

## `Response 5`

Yes, that's correct. You can save the session token locally in React using `localStorage` or `sessionStorage`. 

Here's an example code to save the session token in `localStorage`:

```javascript
localStorage.setItem('token', token);
```

I hope this helps!

## `Prompt 6`

if you use sessionStorage how do you get the variables stored

## `Response 6`

To get session variables from `sessionStorage`, you can use the `getItem()` method¹. Here's an example code:

```javascript
const token = sessionStorage.getItem('token');
```

This code retrieves the session token from `sessionStorage` and stores it in the `token` variable.

I hope this helps!

Source: Conversation with Bing, 4/16/2023
(1) session - Javascript: Retrieve all keys from sessionStorage? - Stack .... <https://stackoverflow.com/questions/41826355/javascript-retrieve-all-keys-from-sessionstorage>.
(2) View and edit session storage - Chrome Developers. <https://developer.chrome.com/docs/devtools/storage/sessionstorage/>.
(3) View and edit session storage - Microsoft Edge Development. <https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/sessionstorage>.