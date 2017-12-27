## CHAT

[События](#Events)

### Events

1. **Verify** . Данное событие принимает объект с информацией о пользователе и callback функцию которая сработает в результате успешного общения с сервером


Пример вызова события с клиента.

```js
 socket.emit( 'verify', { email: 'exanple@example.com', name: 'TesUser' }, function (error, res) {

    if ( error ) return console.error(error);
    console.log(res) // в res вы получите данные пользователя которого передали

 } );
```

Пример вызова события с клиента в виде промиса.

```js
 return new Promise(function (resolve, reject) {

     socket.emit( 'verify', { email: 'exanple@example.com', name: 'TesUser' }, function (error, res) {

         if ( error ) reject(error);
         resolve(res);

     } );

 })
```