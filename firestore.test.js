import "firebase/firestore";
import firebase from "firebase/app";
//
if (firebase.apps.length === 0) {
  firebase.initializeApp({
    projectId: "test-app",
  });
}

// const { globalStore } = require("../../../src/stores");

it("works", async () => {
  // await firebase.auth().signInAnonymously();
  firebase.firestore().useEmulator("localhost", "7999");

  const doc = await firebase.firestore().doc("test/thing").get();
  await firebase.firestore().disableNetwork();

  console.log("Doc data is: ", doc.data());

  // await firebase.firestore().waitForPendingWrites();

  // await firebase.firestore().clearPersistence();

  await firebase.firestore().terminate();
  await firebase.app().delete();
});
