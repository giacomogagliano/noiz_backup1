import { testEnvironment } from "@zionstate/test";
import Gun from "gun";
import "../node_modules/gun/lib/open.js";
const { expect, log } = testEnvironment();
expect;
log;

const gun = Gun("http://localhost:8080/gun");

describe("first", () => {
  log("ciao");
  it("should", async () => {
    let database = gun.get("database");
    database.open(e => {
      log("database", e);
    });
    database.get("users").set({ name: "giacomo" });
    database.get("users").set({ name: "arianna" });
    database
      .get("users")
      .map()
      .once(user => {
        log(user);
      });
  });
});

/**
 * 
const setAuthFn = async (obj) => {
  await requestToServer({
    url: '/authentication',
    method: 'post',
    data: obj
  })
}

const setUserFn = async (obj) => {
  await requestToServer({
    url: '/user',
    method: 'post',
    data: obj
  })
}

const getFn = async (obj) => {
  return requestToServer({
    url: '/authentication',
    method: 'get',
    params: obj
  })
}
```javascript
// Provide getFn, setAuthFn, setUserFn as requests to your database/backend service (more details in docs).
const hedgehog = new Hedgehog(getFn, setAuthFn, setUserFn)
let wallet
if (hedgehog.isLoggedIn()) {
  wallet = hedgehog.getWallet()
} else {
  wallet = await hedgehog.login('username', 'password')
  // or
  wallet = await hedgehog.signUp('username', 'password')
}

```
 */

/**
 *   const checkWalletStatus = () => {
    if (hedgehog.isLoggedIn()) {
      setSignedIn(true);
      // Retrieve wallet with: hedgehog.getWallet()
    } else {
      if (
        hedgehog &&
        hedgehog.walletExistsLocally &&
        hedgehog.walletExistsLocally()
      ) {
        setSignedIn(true);
        // Retrieve wallet with: hedgehog.restoreLocalWallet()
      } else {
        setSignedIn(false);
      }
    }
  };

  const handleSignUp = async event => {
    if (password !== passwordConfirmation) {
      setErrorMessage(messages.mismatched);
    } else if (!password || !username || !passwordConfirmation) {
      setErrorMessage(messages.empty);
    } else {
      setLoading(true);
      setErrorMessage("");
      try {
        await hedgehog.signUp(username, password);
        checkWalletStatus();
      } catch (e) {
        console.error(e);
        setErrorMessage(messages.exists);
      }
      setLoading(false);
    }
  };

  const handleLogin = async event => {
    setErrorMessage("");
    setLoading(true);
    try {
      await hedgehog.login(username, password);
      checkWalletStatus();
    } catch (e) {
      console.error(e);
      setErrorMessage(messages.invalid);
    }
    setLoading(false);
  };

  const changeTab = i => {
    setErrorMessage("");
    setActiveTab(i);
  };

  const logout = () => {
    hedgehog.logout();
    setUsername('');
    setPassword('');
    setPasswordConfirmation('');
    checkWalletStatus();
  };

  const registerEnterKey = () => {
    document.onkeydown = (e) => {
      e = e || window.event;
      switch (e.which || e.keyCode) {
        case 13:
          if (!signedIn && activeTab === 0) {
            handleSignUp();
          }
          if (!signedIn && activeTab === 1) {
            handleLogin();
          }
          break;
      }
    }
  }
 */

/**
 * User request page
 * User click signin
 * App send message to sign to enable signin
 * User sign message
 * App creates user and couples eth address
 * User deploys a Profile Contract
 * Gun generates key pair
 * Private key is stored in Profile Contract
 * App create a Profile which is a Soul on gundb
 * The vault has a sign method
 * Only if message is signed can update database
 */
