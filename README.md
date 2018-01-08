## CHAT

[Порядок вызова событий](#sequence-actions)


[События](#events)


### Sequence-actions
Подписаться на событие "connection" у сокета.
Обязательно первым нужно выполнить Verify передав данные о пользователе после чего выполнять все остальные действия.
Для работы сокету достаточно передать email и имя, пароли не нужны. Если пользователя в базе нет то он будет создан и сервер вернет нам объект с информацией
о нем.


Пример старта сокета на клиенте

```js

socket.on('connection', function () {

    console.log('socket connected');

    chat.verify(userData)
           .then( user => {
               console.log(user);
               userInfo = user;
               // save to localStorage
           } )
           .then( enterModal.hide.bind(enterModal) )
           .then( chat.getUsers )
           .then( chat.renderUsers )
           .then( setEvents )
           .catch( error => console.error(error) );

})

```


### Events

1. **Verify** . Данное событие принимает объект с информацией о пользователе и callback функцию которая сработает в результате успешного общения с сервером


*Пример вызова события с клиента.*

```js
 socket.emit( 'verify', { email: 'exanple@example.com', name: 'TesUser' }, function (error, res) {

    if ( error ) return console.error(error);
    console.log(res) // в res вы получите данные пользователя которого передали

 } );
```

*Пример вызова события с клиента в виде промиса.*

```js
 return new Promise(function (resolve, reject) {

     socket.emit( 'verify', { email: 'exanple@example.com', name: 'TesUser' }, function (error, res) {

         if ( error ) reject(error);
         resolve(res);

     } );

 })
```

*Схема объекта пользователя.*

```js

{

    date: "2017-12-26T18:04:10.044Z"
    email: "some@some"
    isOnline: true
    lastMessage: "hjgjh"
    name: "as"
    verify: true
    __v: 0
    _id: "5a428f1a22fe220014c14c1e"

}

```

2. **getUsers** . Данное событие принимает callback функцию которая сработает в результате успешного общения с сервером


*Пример вызова события с клиента.*

```js
 socket.emit( 'getUsers', function (users) {

    console.log(users) // вы получаете массив всех пользователей которые есть в чате

 } );
```

*Пример вызова события с клиента в виде промиса.*

```js
 return new Promise(function (resolve, reject) {

     socket.emit( 'getUsers', function (users) {

         if ( !users ) reject('Users not found');
         resolve( users );

     } );

 });
```

3. **sendMessage** . Данное событие принимает текст сообщения и объект с информацией о пользователе


*Пример вызова события с клиента.*

```js

 socket.emit('chatMessage', 'Текс сообщения', { email: "some@some", name: "as" });

```

*Пример отслеживания этого события с клиента.*

```js

 socket.on('chatMessage', function (message, user) {
     // в message мы получим само сообщение
     // в user мы объект пользователя который написал это сообщение
     console.log(message, user);
 });

```

4. **writeMessage** . Данное событие принимает имя пользователя который пишет


*Пример вызова события с клиента.*

```js

 socket.emit('writeMessage', userName);

```

*Пример отслеживания этого события с клиента.*

```js

 socket.on('writeMessage', function (name) {
    // в name мы получим имя пользователя который пишет сообщение
     console.log('writing', name);
 });

```


5. **error** . Данное событие эмитится если произошла ошибка на сервере и вы можете на него подписаться


*Пример отслеживания этого события с клиента.*

```js

 socket.on('error', function (error) {
     // в переменной error будет текст ошибки
     console.log(error);
 });

```