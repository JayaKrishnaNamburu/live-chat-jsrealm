export const getMonth = givenMonth => {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };
  return months[givenMonth];
};

export const requestNotifications = () => {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    sendNotification("Welcome to JSRealm");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    try {
      Notification.requestPermission().then(() =>
        sendNotification("Welcome to JSRealm")
      );
    } catch (error) {
      if (error instanceof TypeError) {
        Notification.requestPermission(() => {
          sendNotification("Welcome to JSRelam");
        });
      } else {
        throw error;
      }
    }
  }
};

export const sendNotification = (message: string) => {
  if (Notification.permission === "granted") {
    const notif = new Notification(message);
  }
};
