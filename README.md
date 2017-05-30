You can use docker or install node and php7

Server render react js app on php v8js

npm install
```
docker run -it --rm \
	--name js-install-dependencies \
	-v "$PWD/js_app":/usr/src/app \
	-w /usr/src/app \
	node \
	bash -c "npm install"
```

Build es6 Js bundle
```
docker run -it --rm \
	--name build-js-app \
	-v "$PWD/js_app":/usr/src/app \
	-w /usr/src/app \
	node \
	bash -c "npm run build"
```

Run bundled JS on php v8js
```
docker run -it --rm \
	--name php-v8js-app \
 	-v "$PWD":/usr/src/app \
 	-w /usr/src/app \
 	-p 3000:80 \
 	stesie/v8js \
 	bash -c "php -S 0.0.0.0:80 -t ."
```

check results
```
curl "$(docker-machine ip):3000/"
curl "$(docker-machine ip):3000/page1"
curl "$(docker-machine ip):3000/page2"
```
