import { expect } from 'chai';

import { LoginViewService } from './login-view.service';

const template1 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login</title>
</head>
<body>
  <form action="/auth/email" method="post">
    <input type="hidden" name="_csrf" value="foobar">
    <input type="email" name="email" required autofocus>
    <br>
    <input type="password" name="password" required>
    <button type="submit">Log in</button>
  </form>
</body>
</html>`;

const template2 =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Login</title>
</head>
<body>
  <form action="/auth/email" method="post">
    <strong>Invalid credentials.</strong>
    <input type="hidden" name="_csrf" value="foobar">
    <input type="email" name="email" required autofocus>
    <br>
    <input type="password" name="password" required>
    <button type="submit">Log in</button>
  </form>
</body>
</html>`;

describe('LoginViewService', () => {

  describe('when render is called', () => {

    it('should return the rendered template.', async () => {
      const service = new LoginViewService();

      const actual = await service.render({
        csrfToken: 'foobar',
        invalidCredentials: undefined
      });

      expect(actual).to.equal(template1);

      const actual2 = await service.render({
        csrfToken: 'foobar',
        invalidCredentials: true
      });

      expect(actual2).to.equal(template2);
    });

  });

});
