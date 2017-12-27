## CHAT

[События](#events)

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

2. **getUsers** . Данное событие принимает callback функцию которая сработает в результате успешного общения с сервером


*Пример вызова события с клиента.*

```js
 socket.emit( 'getUsers', function (users) {

    console.log(users) // вы получаете всех пользователей которые есть в чате

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