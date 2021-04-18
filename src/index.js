import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
const easyvk = require('easyvk')
const path = require('path');

easyvk({
  username: 'ваш_логин',
  password: 'ваш_пароль',
  sessionFile: path.join(__dirname, '.my-session')
}).then(async vk => {

  /*
	Этот код сначала авторизует вас по логину и паролю,
	а затем отправит текстовое сообщение вам
  */

  // делаем запрос на GET api.vk.com/method/messages.send
  let vkr = await vk.call('messages.send', {
    peer_id: vk.session.user_id,
    message: 'Привет!',
    random_id: easyvk.randomId()
  });


  // выводим ответ сервера
  console.log(vkr);

})
