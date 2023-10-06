import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  remove,
  get,
  update,
} from "firebase/database";
import { app } from "./fbConfig";
const database = getDatabase(app);

export let fbAdd = (nodeName, body) => {
  return new Promise((resolve, reject) => {
    const TaskId = push(ref(database, `${nodeName}/`)).key;
    body.id = TaskId;
    const reference = ref(database, `${nodeName}/${body.id}`);
    set(reference, body)
      .then((res) => {
        resolve("Data Send Successfully");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export let fbGet = (nodeName) => {
  return new Promise((resolve, reject) => {
    const reference = ref(database, nodeName);
    get(reference)
      .then((snapshot) => {
        if (snapshot.exists()) {
          resolve(snapshot.val());
          resolve("Data Get Successfully");
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
