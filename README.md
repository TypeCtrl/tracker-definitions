# tracker definitions [![CircleCI](https://circleci.com/gh/TypeCtrl/tracker-definitions/tree/master.svg?style=svg)](https://circleci.com/gh/TypeCtrl/tracker-definitions/tree/master)

> Tracker definitions from [jackett](https://github.com/Jackett/Jackett) published as json and js modules. Data is somewhat normalized and types definitions available for modules.

### Install
```sh
npm install @ctrl/tracker-definitions
```

### Use
Here is an example looping over all definitions available printing their source (~~cardigann~~ or jackett) and name. Some are more up to date than others.
```ts
import { definitions } from '@ctrl/tracker-definitions';

for (const def of definitions) {
  console.log(def.source, def.name);
}
```

### Definitions docs: 
- Jackett Definitions: https://github.com/Jackett/Jackett/wiki/Definition-format
