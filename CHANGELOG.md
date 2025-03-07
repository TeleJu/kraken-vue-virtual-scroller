# [2.0.0-beta.9](https://github.com/Akryum/vue-virtual-scroller/compare/v2.0.0-beta.8...v2.0.0-beta.9) (2023-02-06)

### Bug Fixes

- Fix sizing getting floored and cutting off pixels
- Add before and after class props

# [2.0.0-beta.8](https://github.com/Akryum/vue-virtual-scroller/compare/v2.0.0-beta.7...v2.0.0-beta.8) (2023-02-06)

### Bug Fixes

- borderBoxSize not available in older browsers ([8f90971](https://github.com/Akryum/vue-virtual-scroller/commit/8f9097138d2f90ece8348141ac320c47ff7ab64a))

# [2.0.0-beta.7](https://github.com/Akryum/vue-virtual-scroller/compare/v2.0.0-beta.6...v2.0.0-beta.7) (2022-12-14)

### Bug Fixes

- items not updating if new object reference, fix [#690](https://github.com/Akryum/vue-virtual-scroller/issues/690) ([5b5df8c](https://github.com/Akryum/vue-virtual-scroller/commit/5b5df8cdc231f989e7fc6d6677d02e9ef695d1b9))

# [2.0.0-beta.6](https://github.com/Akryum/vue-virtual-scroller/compare/v2.0.0-beta.5...v2.0.0-beta.6) (2022-12-14)

### Bug Fixes

- keyField issue for class instances, fix [#770](https://github.com/Akryum/vue-virtual-scroller/issues/770) ([#771](https://github.com/Akryum/vue-virtual-scroller/issues/771)) ([1559ca8](https://github.com/Akryum/vue-virtual-scroller/commit/1559ca87e9195b6a1c5bada13de7f7b755a2fb6c))
- **RecycleScroller:** gridItems is undefined when scrollToItem, fix [#773](https://github.com/Akryum/vue-virtual-scroller/issues/773) ([#761](https://github.com/Akryum/vue-virtual-scroller/issues/761)) ([7c809ad](https://github.com/Akryum/vue-virtual-scroller/commit/7c809ad1d612824867490c7bd5ce2861110412eb))
- sorting views not working, [#772](https://github.com/Akryum/vue-virtual-scroller/issues/772) ([0b199d1](https://github.com/Akryum/vue-virtual-scroller/commit/0b199d14c846ecc00b93f989adbe29961dc68aad))
- view not unused if item no longer present, fix [#774](https://github.com/Akryum/vue-virtual-scroller/issues/774) ([bd51403](https://github.com/Akryum/vue-virtual-scroller/commit/bd514031f537978f0343317bb9cee550c5bfd7ad))
- views not reused correctly ([d5a8d75](https://github.com/Akryum/vue-virtual-scroller/commit/d5a8d759090f9af656865dd98648941fb2c71fa2))

### Features

- allow throttling update calls ([#764](https://github.com/Akryum/vue-virtual-scroller/issues/764)) ([9ba57d7](https://github.com/Akryum/vue-virtual-scroller/commit/9ba57d7d84c06d2ad265a266958292081704f218))

# [2.0.0-beta.5](https://github.com/Akryum/vue-virtual-scroller/compare/v2.0.0-beta.4...v2.0.0-beta.5) (2022-12-07)

### Bug Fixes

- duplicate active views ([1ef796b](https://github.com/Akryum/vue-virtual-scroller/commit/1ef796b42143da6d4e74f83b8ac88176128e6d77))
- **DynamicScroller:** gaps caused by DOM reusing not triggering ResizeObserver ([a21e191](https://github.com/Akryum/vue-virtual-scroller/commit/a21e1915d76741a2806abd3a702d450f722879c8))
- inconsistent state on reused view ([a14747d](https://github.com/Akryum/vue-virtual-scroller/commit/a14747d33d75eaf7fe820370436d70e82562939b))
- views map corruption + view not removed from unusedPool ([cef8860](https://github.com/Akryum/vue-virtual-scroller/commit/cef886085c52f62736cf4c404a32f4f4fce6d229))

### Performance Improvements

- unnecessary loop ([86d0d07](https://github.com/Akryum/vue-virtual-scroller/commit/86d0d0776e26542d1b94484ec6ff5410733d3f18))

# [2.0.0-beta.4](https://github.com/Akryum/vue-virtual-scroller/compare/v2.0.0-beta.3...v2.0.0-beta.4) (2022-12-06)

### Bug Fixes

- improved dynamic scroller resize observer logic ([40f58b3](https://github.com/Akryum/vue-virtual-scroller/commit/40f58b3e3a411df36c09d59cc3776719f60d93cf))
- item sizes getting 'disabled' resulting in gaps ([55b4ab1](https://github.com/Akryum/vue-virtual-scroller/commit/55b4ab1df1b4998178f2f03a53c112086a2633f2))
- unusing views after non-continuous scroll ([11488b7](https://github.com/Akryum/vue-virtual-scroller/commit/11488b7d8ffdfe1384fe808e4a49c1ba95ad1383))
- views incorrectly unused (proxy identity comparison) ([395bbfb](https://github.com/Akryum/vue-virtual-scroller/commit/395bbfb73588455795ecc5b144281ce5fda042ff))

# [2.0.0-beta.3](https://github.com/Akryum/vue-virtual-scroller/compare/v2.0.0-beta.2...v2.0.0-beta.3) (2022-10-18)

### Performance Improvements

- small code changes to maximize performance ([3b4dbf3](https://github.com/Akryum/vue-virtual-scroller/commit/3b4dbf39f480745d53e4bb43217c2b35975e4ab6))

### Reverts

- pass key-field prop [#732](https://github.com/Akryum/vue-virtual-scroller/issues/732), fix [#758](https://github.com/Akryum/vue-virtual-scroller/issues/758) ([8d221e6](https://github.com/Akryum/vue-virtual-scroller/commit/8d221e6978e4924ab125337fc91f6b6de7a1f497))

# [2.0.0-beta.2](https://github.com/Akryum/vue-virtual-scroller/compare/v1.1.1...v2.0.0-beta.2) (2022-10-17)

### Bug Fixes

- fix: height NaN, fix [#757](https://github.com/Akryum/vue-virtual-scroller/issues/757)

# [2.0.0-beta.1](https://github.com/Akryum/vue-virtual-scroller/compare/v1.1.0...v2.0.0-beta.1) (2022-10-15)

### Bug Fixes

- Account for the height of the leading and trailing slots when calculating visible items, fix [#685](https://github.com/Akryum/vue-virtual-scroller/issues/685) ([24ab3ba](https://github.com/Akryum/vue-virtual-scroller/commit/24ab3ba773d5819fcbe29f13eab663d48bce73ca))
- avoid jumping scroll position when upper item size is calculated ([#374](https://github.com/Akryum/vue-virtual-scroller/issues/374)) ([fd58a95](https://github.com/Akryum/vue-virtual-scroller/commit/fd58a95392c98b8e67da66235fcf4cac78ea2fd4))
- clamp endIndex if less items than prerender ([#473](https://github.com/Akryum/vue-virtual-scroller/issues/473)) ([f9124aa](https://github.com/Akryum/vue-virtual-scroller/commit/f9124aa81c36b46df339a5f18e0e832ab6e5a580))
- DynamicScroller should pass its own keyField prop to child RecycleScroller ([#732](https://github.com/Akryum/vue-virtual-scroller/issues/732)) ([9673679](https://github.com/Akryum/vue-virtual-scroller/commit/9673679fc174cd6236fae4e19a9b1a3b625e900e))
- **DynamicScrollerItem:** watch item prop ([#700](https://github.com/Akryum/vue-virtual-scroller/issues/700)) ([4d3b956](https://github.com/Akryum/vue-virtual-scroller/commit/4d3b95651610b8396c8dff66af9267407eab8e72))
- issue with beforeDestroy hook ([#748](https://github.com/Akryum/vue-virtual-scroller/issues/748)) ([59f3f1b](https://github.com/Akryum/vue-virtual-scroller/commit/59f3f1b0aee9ab8ea276fee60e204b6dcc0baceb))
- merge ([c8363b1](https://github.com/Akryum/vue-virtual-scroller/commit/c8363b114f691042dbced3b5b79d2ebd7812f481))
- restore scroll in keep-alive ([#724](https://github.com/Akryum/vue-virtual-scroller/issues/724)) ([5011e06](https://github.com/Akryum/vue-virtual-scroller/commit/5011e06f2aa6ef8afa6ecaad804413e56a542c8d))
- scrollToItem works with pageMode ([#396](https://github.com/Akryum/vue-virtual-scroller/issues/396)) ([c9772bf](https://github.com/Akryum/vue-virtual-scroller/commit/c9772bfb9e87672de1480072c4d5dc8024d1e5d1))
- wrap the callback in requestAnimationFrame, fix [#516](https://github.com/Akryum/vue-virtual-scroller/issues/516) ([#517](https://github.com/Akryum/vue-virtual-scroller/issues/517)) ([6f359ab](https://github.com/Akryum/vue-virtual-scroller/commit/6f359abed6cf5d81a05d3760d6b622153f331f01))

### Features

- add an empty slot ([#398](https://github.com/Akryum/vue-virtual-scroller/issues/398)) ([5c2715c](https://github.com/Akryum/vue-virtual-scroller/commit/5c2715c0a2c52b0c27436baabbf982fcb9861131))
- add skipHover prop to deactive the hover detection ([#752](https://github.com/Akryum/vue-virtual-scroller/issues/752)) ([b613318](https://github.com/Akryum/vue-virtual-scroller/commit/b613318a52d4d8f84bda69f0189f27dd51d0aaff))
- adds configurable list/item tags for semantic html ([#203](https://github.com/Akryum/vue-virtual-scroller/issues/203)) ([3d24dc3](https://github.com/Akryum/vue-virtual-scroller/commit/3d24dc31928ec9eabe74294e5d5b3466109e1bc2))
- custom classes for list wrapper and list items. ([#397](https://github.com/Akryum/vue-virtual-scroller/issues/397)) ([32b285d](https://github.com/Akryum/vue-virtual-scroller/commit/32b285d40667870b65c71dc59b02627f97c67ea4))
- Emit events for scroll to begin and end of list ([#364](https://github.com/Akryum/vue-virtual-scroller/issues/364)) ([2a7bfd4](https://github.com/Akryum/vue-virtual-scroller/commit/2a7bfd45e1ee56e82426a67d9f3f3ba5a7839185))
- gridItems prop ([#27](https://github.com/Akryum/vue-virtual-scroller/issues/27)) ([6339e72](https://github.com/Akryum/vue-virtual-scroller/commit/6339e72693c982805648ae3001b7c2957d8aa39e))
- itemSecondarySize ([43d311c](https://github.com/Akryum/vue-virtual-scroller/commit/43d311c2f336de74da4d0ec705b0a3546eeda153))
- throw error when key field does not exist in item ([#265](https://github.com/Akryum/vue-virtual-scroller/issues/265)) ([c63129f](https://github.com/Akryum/vue-virtual-scroller/commit/c63129fdc8264d25c737db1c2ce2891a9b804705))
- update event provide range of the visible items ([#115](https://github.com/Akryum/vue-virtual-scroller/issues/115)) ([f19af6c](https://github.com/Akryum/vue-virtual-scroller/commit/f19af6c15346ff33e5d3c4b9729b02a73d5fe4df))

### Performance Improvements

- skipHover: don't add event listeners ([6b623b5](https://github.com/Akryum/vue-virtual-scroller/commit/6b623b56e4ab481b1e0cde883682df2cc81edf19))
