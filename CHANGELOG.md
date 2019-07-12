## [0.0.10](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.9...v0.0.10) (2019-07-12)


### Dependencies

* **bump:** dep base v0.0.11



## [0.0.9](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.8...v0.0.9) (2019-07-05)


### Features

* **version:** add to component properties accessible via this.version ([50c6350](https://github.com/rapid-build-ui/rb-modal/commit/50c6350))


### Dependencies

* **bump:** deps rb-base v0.0.10 and rb-button v0.0.17 ([1c52479](https://github.com/rapid-build-ui/rb-modal/commit/1c52479))



## [0.0.8](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.7...v0.0.8) (2019-05-09)


### Dependencies

* **bump:** deps rb-base v0.0.9 and rb-button v0.0.16 ([ceea87b](https://github.com/rapid-build-ui/rb-modal/commit/ceea87b))


### BREAKING CHANGES

To migrate the code follow the examples below:

1. **api backdrop option:** change no-backdrop to backdrop ([072f4e8](https://github.com/rapid-build-ui/rb-modal/commit/072f4e8))

	**Before:**  
	no-backdrop

	**Now:**  
	backdrop=false

2. **api closable option:** change unclosable to closable ([aa96629](https://github.com/rapid-build-ui/rb-modal/commit/aa96629))

	**Before:**  
	unclosable

	**Now:**  
	closable=false

3. **api open option:** change show to open to be consistent with other components ([8fedbed](https://github.com/rapid-build-ui/rb-modal/commit/8fedbed))

	**Before:**  
	show=true

	**Now:**  
	open=true



## [0.0.7](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.6...v0.0.7) (2019-03-05)


### Dependencies

* **bump:** deps rb-base v0.0.8 and rb-button v0.0.15 ([647ec0e](https://github.com/rapid-build-ui/rb-modal/commit/647ec0e))



## [0.0.6](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.5...v0.0.6) (2019-02-25)


### Dependencies

* **bump deps:** ([ee9c539](https://github.com/rapid-build-ui/rb-modal/commit/ee9c539))
	* **rb-base** to v0.0.7
	* **rb-button** to v0.0.14



## [0.0.5](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.4...v0.0.5) (2018-12-05)


### Features

* **event:** emit event show-changed when show changes ([e048d2c](https://github.com/rapid-build-ui/rb-modal/commit/e048d2c))
* **hidden attribute:** display style that respects the hidden attribute ([abe60af](https://github.com/rapid-build-ui/rb-modal/commit/abe60af))
* **new api option:** no-backdrop ([a7e6be9](https://github.com/rapid-build-ui/rb-modal/commit/a7e6be9))
* **scrolling:** scroll body when modal is taller than viewport ([4ce51d6](https://github.com/rapid-build-ui/rb-modal/commit/4ce51d6))
* **slots:** only display slots if they are provided ([e95cf82](https://github.com/rapid-build-ui/rb-modal/commit/e95cf82))


### Performance Improvements

* **css:** improve browser performance by adding css contain property ([131af98](https://github.com/rapid-build-ui/rb-modal/commit/131af98))


### Dependencies

* **bump:** deps rb-base v0.0.6 and rb-button v0.0.13 ([8827a7b](https://github.com/rapid-build-ui/rb-modal/commit/8827a7b))



## [0.0.4](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.3...v0.0.4) (2018-11-13)


### Features

* **responsive:** add left and right bumpers when screen is less then 560px ([f22e32b](https://github.com/rapid-build-ui/rb-modal/commit/f22e32b))


### Dependencies

* **bump:** deps rb-base v0.0.5 and rb-button v0.0.12 ([be04142](https://github.com/rapid-build-ui/rb-modal/commit/be04142))



## [0.0.3](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.2...v0.0.3) (2018-09-26)


### Features

* **header and footer:** make editable ([0d7034f](https://github.com/rapid-build-ui/rb-modal/commit/0d7034f))


### Dependencies

* **bump:** deps rb-base v0.0.4 and rb-button v0.0.11 ([138cc6a](https://github.com/rapid-build-ui/rb-modal/commit/138cc6a))



## [0.0.2](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.1...v0.0.2) (2018-09-14)


### Bug Fixes

* **mobile:** close modal when clicking on the backdrop via touchstart event ([8c7a3f9](https://github.com/rapid-build-ui/rb-modal/commit/8c7a3f9))


### Features

* **close modal:** when clicking anywhere but the modal ([31ffa78](https://github.com/rapid-build-ui/rb-modal/commit/31ffa78))
* **new option:** add unclosable api option ([889c362](https://github.com/rapid-build-ui/rb-modal/commit/889c362))


### Dependencies

* **bump deps:** ([95e1270](https://github.com/rapid-build-ui/rb-modal/commit/95e1270))
	* **rb-base** to v0.0.3
	* **rb-button** to v0.0.10



## [0.0.1](https://github.com/rapid-build-ui/rb-modal/compare/v0.0.0...v0.0.1) (2018-09-05)


### Features

* **api option:** add center ([d19ce04](https://github.com/rapid-build-ui/rb-modal/commit/d19ce04))
* **api option:** add content ([ead2c6a](https://github.com/rapid-build-ui/rb-modal/commit/ead2c6a))
* **api option:** add show ([6589319](https://github.com/rapid-build-ui/rb-modal/commit/6589319))
* **close modal:** on keydown escape ([a7cb96d](https://github.com/rapid-build-ui/rb-modal/commit/a7cb96d))


### Dependencies

* **rb-base:** bump to v0.0.2 ([ff828a2](https://github.com/rapid-build-ui/rb-modal/commit/ff828a2))



