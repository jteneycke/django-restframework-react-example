# What's this?

A sample of how to structure a `django` app with `create-react-app` to get past the [cthulhuian madness](https://stackoverflow.com/a/1732454) of figuring out how to proxy CORs and CSRF in development, and the subtle "peculiarities" of `djangorestframework`.


# Up and running

One terminal for Django
```
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```

Another terminal for the frontend
```
cd frontend
yarn
yarn run start
```

# References

Setting up combined app structure for development (CORS & CSRF)
* https://www.fusionbox.com/blog/detail/create-react-app-and-django/624/
* https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development
* TODO: Deployment guide for Node + Django on Heroku

Global State Management (a simpler way to bypass passing props all over the place)
* https://www.npmjs.com/package/use-global-hook

Using JWT and React Router
* https://hptechblogs.com/using-json-web-token-react/
* https://reacttraining.com/react-router/web/example/auth-workflow

More recent example using Context API
* https://codesandbox.io/s/my206lnpv9    

Misc React Stuff
* https://tylermcginnis.com/react-router-pass-props-to-components/
* https://til.hashrocket.com/posts/z8cimdpghg-passing-props-down-to-react-router-route
* https://www.robinwieruch.de/react-list-components/
* https://reactjs.org/docs/hooks-reference.html#useref

Misc Django Stuff
* https://www.django-rest-framework.org/api-guide/serializers/#dealing-with-nested-objects

# Dependencies

Useful Dev Stuff (shell_plus, etc)
* https://github.com/django-extensions/django-extensions
* https://github.com/Rhumbix/django-request-logging
* TODO: Find something that gives better logging for DRF 400's

App specific deps
* https://github.com/davesque/django-rest-framework-simplejwt
