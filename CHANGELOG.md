<a name="5.2.0"></a>
# [5.2.0](https://github.com/InCuca/vue-loopback/compare/v5.1.0...v5.2.0) (2018-07-12)


### Bug Fixes

* **lint:** add jest support ([bc62f54](https://github.com/InCuca/vue-loopback/commit/bc62f54))
* **template:** filter only testable directories ([9664336](https://github.com/InCuca/vue-loopback/commit/9664336))


### Features

* **eslint:** add more test folders ([82f4654](https://github.com/InCuca/vue-loopback/commit/82f4654))



<a name="5.1.0"></a>
# [5.1.0](https://github.com/InCuca/vue-loopback/compare/v5.0.0...v5.1.0) (2018-06-28)


### Bug Fixes

* **package:** fix test script ([1984f65](https://github.com/InCuca/vue-loopback/commit/1984f65))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/InCuca/vue-loopback/compare/v4.2.0...v5.0.0) (2018-06-28)


### Bug Fixes

* **babel:** add stage2 support ([c95f47c](https://github.com/InCuca/vue-loopback/commit/c95f47c))
* **gulp-tasks:** add exit in mocha to close mocha when test pass ([0963212](https://github.com/InCuca/vue-loopback/commit/0963212))
* **gulp-tasks:** fix backslashs in win fixes [#8](https://github.com/InCuca/vue-loopback/issues/8) ([b721305](https://github.com/InCuca/vue-loopback/commit/b721305))
* **jest:** fix jest plugins path ([6632ad6](https://github.com/InCuca/vue-loopback/commit/6632ad6))
* **lint:** fix eslint errors ([dc2a6c7](https://github.com/InCuca/vue-loopback/commit/dc2a6c7))
* **loopback:** pass previous uid to loading fn ([39093da](https://github.com/InCuca/vue-loopback/commit/39093da))
* **loopback-boot:** add support for es6 modules in boot scripts ([2d813fe](https://github.com/InCuca/vue-loopback/commit/2d813fe)), closes [strongloop/loopback-boot#280](https://github.com/strongloop/loopback-boot/issues/280)
* **package:** run server tests in band ([4d45501](https://github.com/InCuca/vue-loopback/commit/4d45501))
* **package:** update loopback-boot to 3.1 to fix boot ([200b615](https://github.com/InCuca/vue-loopback/commit/200b615))
* **server:** add option for compatibility with jest ([fbb68b2](https://github.com/InCuca/vue-loopback/commit/fbb68b2))
* **tasks:** remove tests tasks ([e889a3c](https://github.com/InCuca/vue-loopback/commit/e889a3c))
* **tests:** remove client and server separation ([cd4ac8c](https://github.com/InCuca/vue-loopback/commit/cd4ac8c))


### Features

* **babel:** add node 8 add regenerator ([94cd1a4](https://github.com/InCuca/vue-loopback/commit/94cd1a4))
* **jest:** add jest config file ([044a3eb](https://github.com/InCuca/vue-loopback/commit/044a3eb))
* **jest:** add jest plugins config ([3021667](https://github.com/InCuca/vue-loopback/commit/3021667))
* **jest:** add jest-preset-loopback ([575873c](https://github.com/InCuca/vue-loopback/commit/575873c))
* **Login:** add sessionError with authorization error redirection ([a05a9eb](https://github.com/InCuca/vue-loopback/commit/a05a9eb))
* **loopback:** add DateString type support ([5ba568d](https://github.com/InCuca/vue-loopback/commit/5ba568d))
* **package:** add babel-jest ([29533ac](https://github.com/InCuca/vue-loopback/commit/29533ac))
* **package:** add jest dependency ([1b82ba3](https://github.com/InCuca/vue-loopback/commit/1b82ba3))
* **package:** add loopback-jest ([2bc6cc8](https://github.com/InCuca/vue-loopback/commit/2bc6cc8))
* **package:** add vue-jest ([33c6d57](https://github.com/InCuca/vue-loopback/commit/33c6d57))
* **package:** run afterbuild after build, fixes [#9](https://github.com/InCuca/vue-loopback/issues/9) ([77c6fcf](https://github.com/InCuca/vue-loopback/commit/77c6fcf))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/InCuca/vue-loopback/compare/v4.1.1...v4.2.0) (2018-05-17)


### Bug Fixes

* **loopback:** fix lint errors ([ea23c48](https://github.com/InCuca/vue-loopback/commit/ea23c48))


### Features

* **gulp-tasks:** add support to es6 modules, fixes [#7](https://github.com/InCuca/vue-loopback/issues/7) ([0c70326](https://github.com/InCuca/vue-loopback/commit/0c70326))
* **loopback:** add aditional response check in interceptResErrors ([66d1b59](https://github.com/InCuca/vue-loopback/commit/66d1b59))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/InCuca/vue-loopback/compare/v4.1.0...v4.1.1) (2018-05-15)


### Bug Fixes

* **App:** fix lint error ([5cc2c97](https://github.com/InCuca/vue-loopback/commit/5cc2c97))
* **project:** fix lint errors ([04d852a](https://github.com/InCuca/vue-loopback/commit/04d852a))
* **template:** fix lint errors ([ea1c31e](https://github.com/InCuca/vue-loopback/commit/ea1c31e))
* **template:** fix package lint command ([34b3a0b](https://github.com/InCuca/vue-loopback/commit/34b3a0b))


### Features

* **App:** add some style to not extended App ([9f8d380](https://github.com/InCuca/vue-loopback/commit/9f8d380))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/InCuca/vue-loopback/compare/4.0.1...4.1.0) (2018-05-10)


### Bug Fixes

* **App:** only dispatch on extended ([f45a002](https://github.com/InCuca/vue-loopback/commit/f45a002))
* **karma:** fix App errors and consoleAppendfy ([1ef9df4](https://github.com/InCuca/vue-loopback/commit/1ef9df4))
* **karma:** throws when vue warns ([7907f28](https://github.com/InCuca/vue-loopback/commit/7907f28))
* **release-it:** fix buildCommand ([655954a](https://github.com/InCuca/vue-loopback/commit/655954a))
* **template:** fix lint errors ([3ed71f8](https://github.com/InCuca/vue-loopback/commit/3ed71f8))


### Features

* **Account:** add declaration tests and loopback-chai support ([903d1ef](https://github.com/InCuca/vue-loopback/commit/903d1ef))
* **gulp:** add optional -t parameter to test files ([08e5ece](https://github.com/InCuca/vue-loopback/commit/08e5ece))
* **project:** add release-it support ([eaf6f1c](https://github.com/InCuca/vue-loopback/commit/eaf6f1c))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/InCuca/vue-loopback/compare/4.0.0...4.0.1) (2018-04-27)


### Bug Fixes

* **gulp:** fix lint errors ([4545089](https://github.com/InCuca/vue-loopback/commit/4545089))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/InCuca/vue-loopback/compare/3.2.0...4.0.0) (2018-04-27)


### Bug Fixes

* **auth:** fix eslint errors ([154897e](https://github.com/InCuca/vue-loopback/commit/154897e))
* **gulp:** clear modules cache to enable hot reloading ([c1c8f80](https://github.com/InCuca/vue-loopback/commit/c1c8f80))
* **gulp:** fix hot reload ([661639d](https://github.com/InCuca/vue-loopback/commit/661639d))
* **gulp:** fix server hot reloading not restarting ([57609bb](https://github.com/InCuca/vue-loopback/commit/57609bb))
* **loopback:** add accessToken to logout method ([4bac1b6](https://github.com/InCuca/vue-loopback/commit/4bac1b6))
* **loopback:** change error to warning in console ([3413b45](https://github.com/InCuca/vue-loopback/commit/3413b45))
* **loopback:** fix lint errors ([3086f12](https://github.com/InCuca/vue-loopback/commit/3086f12))


### Features

* **async:** add async module ([7b17fc5](https://github.com/InCuca/vue-loopback/commit/7b17fc5))



<a name="3.2.0"></a>
# [3.2.0](https://github.com/InCuca/vue-loopback/compare/3.1.1...3.2.0) (2018-03-25)


### Bug Fixes

* **boot:** fix boot scripts ([33e3461](https://github.com/InCuca/vue-loopback/commit/33e3461))
* **lint:** fix lint errors ([cb3dd31](https://github.com/InCuca/vue-loopback/commit/cb3dd31))
* **loopback:** setLoading to false when errored ([49f48c5](https://github.com/InCuca/vue-loopback/commit/49f48c5))
* **server:** fix index server ([0df8443](https://github.com/InCuca/vue-loopback/commit/0df8443))


### Features

* **build:** add copy:config:server ([661ee6f](https://github.com/InCuca/vue-loopback/commit/661ee6f))



<a name="3.1.1"></a>
## [3.1.1](https://github.com/InCuca/vue-loopback/compare/3.1.0...3.1.1) (2018-03-07)


### Bug Fixes

* **auth:**  only change route after login ([19eb3e9](https://github.com/InCuca/vue-loopback/commit/19eb3e9))
* **auth:** only change router after account exists ([624fff2](https://github.com/InCuca/vue-loopback/commit/624fff2))
* **lint:** fix lint errors ([e1df64d](https://github.com/InCuca/vue-loopback/commit/e1df64d))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/InCuca/vue-loopback/compare/3.0.0...3.1.0) (2018-02-28)


### Bug Fixes

* **auth:** redirect to login if token is expired ([fa3abbc](https://github.com/InCuca/vue-loopback/commit/fa3abbc))


### Features

* **lint:** disable rule ([06108f4](https://github.com/InCuca/vue-loopback/commit/06108f4))
* **loopback:** add setLoading fn ([92da75f](https://github.com/InCuca/vue-loopback/commit/92da75f))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/InCuca/vue-loopback/compare/2.1.0...3.0.0) (2018-02-28)


### Bug Fixes

* **eslint:** disable resolver ([112395b](https://github.com/InCuca/vue-loopback/commit/112395b))
* **eslint:** remove modules from ignore ([c9d0f1a](https://github.com/InCuca/vue-loopback/commit/c9d0f1a))
* **eslintrc:** remove not existent plugin ([7534446](https://github.com/InCuca/vue-loopback/commit/7534446))
* **gulp-tasks:** write sourcemaps to files instead of embed ([f4e2af3](https://github.com/InCuca/vue-loopback/commit/f4e2af3))
* **lint:** fix auto-fixable errors ([ff283cc](https://github.com/InCuca/vue-loopback/commit/ff283cc))
* **lint:** fix lint errors ([b7d673a](https://github.com/InCuca/vue-loopback/commit/b7d673a))
* **lint:** fix lint errors ([b550d32](https://github.com/InCuca/vue-loopback/commit/b550d32))
* **lint:** fix lint errors ([02dc21d](https://github.com/InCuca/vue-loopback/commit/02dc21d))
* **lint:** fix lint errors ([982f0eb](https://github.com/InCuca/vue-loopback/commit/982f0eb))
* **lint:** fix lint errors ([aa7df98](https://github.com/InCuca/vue-loopback/commit/aa7df98))
* **lint:** fix lint errors ([348f1ad](https://github.com/InCuca/vue-loopback/commit/348f1ad))
* **lint:** fix lint errors ([e8eb0b9](https://github.com/InCuca/vue-loopback/commit/e8eb0b9))
* **lint:** fix lint errors and remove no-unresolved rule ([97a2062](https://github.com/InCuca/vue-loopback/commit/97a2062))
* **lint:** fix linting errors ([d353c74](https://github.com/InCuca/vue-loopback/commit/d353c74))
* **lint:** remove import settings ([ffd1574](https://github.com/InCuca/vue-loopback/commit/ffd1574))
* **travis:** apply workaround travis-ci/travis-ci[#8836](https://github.com/InCuca/vue-loopback/issues/8836) ([9f5285b](https://github.com/InCuca/vue-loopback/commit/9f5285b))


### Features

* **eslint:** add eslint to this repo itself ([3b20ee4](https://github.com/InCuca/vue-loopback/commit/3b20ee4))
* **eslint:** ignore template directory ([8bcc688](https://github.com/InCuca/vue-loopback/commit/8bcc688))
* **gulp:** add build:index ([31840ed](https://github.com/InCuca/vue-loopback/commit/31840ed))
* **gulp:** build also index.js ([d23d144](https://github.com/InCuca/vue-loopback/commit/d23d144))
* **lint:** add resolve script ([ed7ed68](https://github.com/InCuca/vue-loopback/commit/ed7ed68))
* **lint:** update settings to airbnb - webpack template based ([df30173](https://github.com/InCuca/vue-loopback/commit/df30173))
* **package:** update eslint ([3e350ae](https://github.com/InCuca/vue-loopback/commit/3e350ae))
* **server:** add client server ([44bfb23](https://github.com/InCuca/vue-loopback/commit/44bfb23))
* **travis:** remove node 6 and 7 ([90cc789](https://github.com/InCuca/vue-loopback/commit/90cc789))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/InCuca/vue-loopback/compare/2.0.1...2.1.0) (2018-02-20)


### Bug Fixes

* **gulp:** fix gulp not reloading client ([f1aed3a](https://github.com/InCuca/vue-loopback/commit/f1aed3a))
* **package:** fix font-awesome dependency ([8b21fc5](https://github.com/InCuca/vue-loopback/commit/8b21fc5))
* **template:** add missing package copy ([5f1c62b](https://github.com/InCuca/vue-loopback/commit/5f1c62b))
* **template:** fix lint errors ([f589041](https://github.com/InCuca/vue-loopback/commit/f589041))


### Features

* **gulp:** add package to built file and add start script ([527e061](https://github.com/InCuca/vue-loopback/commit/527e061))
* **loopback:** add token in local storage ([34d1613](https://github.com/InCuca/vue-loopback/commit/34d1613))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/InCuca/vue-loopback/compare/2.0.0...2.0.1) (2017-12-15)


### Features

* **babel:** change babel configuration ([81903ec](https://github.com/InCuca/vue-loopback/commit/81903ec))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/InCuca/vue-loopback/compare/1.0.2...2.0.0) (2017-12-13)


### Bug Fixes

* **lint:** fix lint errors ([47475f1](https://github.com/InCuca/vue-loopback/commit/47475f1))
* **meta:** fix wrong path name ([131f2ec](https://github.com/InCuca/vue-loopback/commit/131f2ec))
* **readme:** add usage instructions ([8f5c4f5](https://github.com/InCuca/vue-loopback/commit/8f5c4f5))
* **tempalte:** fix hello world component ([b6711ab](https://github.com/InCuca/vue-loopback/commit/b6711ab))
* **template:** add missing dependencies and missing compilers file ([de88643](https://github.com/InCuca/vue-loopback/commit/de88643))
* **template:** escape curly braces and translate strings to en ([e9cbf52](https://github.com/InCuca/vue-loopback/commit/e9cbf52))
* **template:** fix css and translate strings to english ([0f31e93](https://github.com/InCuca/vue-loopback/commit/0f31e93))
* **template:** fix misspeling ([8fa8ae3](https://github.com/InCuca/vue-loopback/commit/8fa8ae3))
* **template:** fix template errors ([5d1e022](https://github.com/InCuca/vue-loopback/commit/5d1e022))
* **template:** Fix wrong comonente filename ([b02518f](https://github.com/InCuca/vue-loopback/commit/b02518f))
* **template:** fix wrong route and add create-admin test ([0942b36](https://github.com/InCuca/vue-loopback/commit/0942b36))
* **template:** remove gitlab file ([92c2550](https://github.com/InCuca/vue-loopback/commit/92c2550))
* **test:** add extended tests ([1897096](https://github.com/InCuca/vue-loopback/commit/1897096))
* **test:** fix boot test ([f6b4a4a](https://github.com/InCuca/vue-loopback/commit/f6b4a4a))
* **test:** fix lint error ([d865b79](https://github.com/InCuca/vue-loopback/commit/d865b79))
* **test:** fix test commands ([1eb749c](https://github.com/InCuca/vue-loopback/commit/1eb749c))
* **tests:**  fix app test ([070b19e](https://github.com/InCuca/vue-loopback/commit/070b19e))
* **tests:** add karma modulesify settings ([0ba8e18](https://github.com/InCuca/vue-loopback/commit/0ba8e18))
* **tests:** add vuefy compiler to karma ([3e9e45e](https://github.com/InCuca/vue-loopback/commit/3e9e45e))
* **tests:** fix test errors ([d8ae843](https://github.com/InCuca/vue-loopback/commit/d8ae843))
* **tests:** fix test errors ([2f0a2e5](https://github.com/InCuca/vue-loopback/commit/2f0a2e5))
* **tests:** fix tests for no extended build ([e9bb6de](https://github.com/InCuca/vue-loopback/commit/e9bb6de))


### Features

* **template:** add extended option ([f08bb6f](https://github.com/InCuca/vue-loopback/commit/f08bb6f))
* **tests:** rename and add more tests ([a71e8a6](https://github.com/InCuca/vue-loopback/commit/a71e8a6))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/InCuca/vue-loopback/compare/1.0.1...1.0.2) (2017-10-29)


### Bug Fixes

* **App:** fix databinding not working ([de7f8e6](https://github.com/InCuca/vue-loopback/commit/de7f8e6))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/InCuca/vue-loopback/compare/722097d...1.0.1) (2017-10-29)


### Bug Fixes

* **build:** add xvfb to travis config ([4442c6c](https://github.com/InCuca/vue-loopback/commit/4442c6c))
* **build:** fix syntax errors ([2d4bb0f](https://github.com/InCuca/vue-loopback/commit/2d4bb0f))
* **build:** remove start scripts ([8f9661e](https://github.com/InCuca/vue-loopback/commit/8f9661e))
* **package:** add vue-cli as dependency ([722097d](https://github.com/InCuca/vue-loopback/commit/722097d))
* **project:** add npm-debug to gitignore ([3043ea6](https://github.com/InCuca/vue-loopback/commit/3043ea6))
* **test:** fix task finishing before test ([80d23fe](https://github.com/InCuca/vue-loopback/commit/80d23fe))
* **test:** remove not used polyfill ([fa0eefd](https://github.com/InCuca/vue-loopback/commit/fa0eefd))
* **test:** show tests output ([49573ef](https://github.com/InCuca/vue-loopback/commit/49573ef))


### Features

* **App:** change prop to data ([825cc69](https://github.com/InCuca/vue-loopback/commit/825cc69))
* **lint:** split eslint files ([7b1c31f](https://github.com/InCuca/vue-loopback/commit/7b1c31f))
* **package:** add test scripts ([47c8f21](https://github.com/InCuca/vue-loopback/commit/47c8f21))
* **template:** add hello prop ([5659f7e](https://github.com/InCuca/vue-loopback/commit/5659f7e))
* **test:** add promise polyfill in client tests ([55afe8a](https://github.com/InCuca/vue-loopback/commit/55afe8a))
* **test:** add support for client tests with karma ([a488810](https://github.com/InCuca/vue-loopback/commit/a488810))
* **test:** change test platform to chrome ([b6af4f5](https://github.com/InCuca/vue-loopback/commit/b6af4f5))
* **test:** split tests ([c079e2c](https://github.com/InCuca/vue-loopback/commit/c079e2c))
* **travis:** remove travis from template and add chrome ([ea911fc](https://github.com/InCuca/vue-loopback/commit/ea911fc))



