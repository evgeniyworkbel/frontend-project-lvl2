# Description
[![Actions Status](https://github.com/evgeniyworkbel/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/evgeniyworkbel/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/f72446949e592e8ca39c/maintainability)](https://codeclimate.com/github/evgeniyworkbel/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f72446949e592e8ca39c/test_coverage)](https://codeclimate.com/github/evgeniyworkbel/frontend-project-lvl2/test_coverage)

Difference generator - a program which determines differences between two data structures, generates a report and format an output in different ways. It takes a JSON/YAML files as input and outputs as stylish/plain/json format.

## Installation

1. Clone the repository (via SSH or HTTPS or GitHub CLI):
```
$ git clone <your link> 
```

2. Change the working directory:
```
$ cd frontend-project-lvl2
```

3. Install dependencies:
```
$ make install
```

If you want to install package globally in your system you should run:
```
$ make link
```
And don't remember rerun this command in case of changes package.json!


#### Tests and linters:
```
$ make lint
$ make test
$ make test-coverage
```

## Usage:
```
$ gendiff [options] <filepath1> <filepath2>
```
_Options:_
```
    -V, --version        output the version number
    -f, --format <type>  output format: stylish, plain, json (default: "stylish")
    -h, --help           display help for command
```
## Demo:
#### 1. Output of help and version
[![asciicast](https://asciinema.org/a/wl1NSwCQms6RwrEJV4txxkYuI.svg)](https://asciinema.org/a/wl1NSwCQms6RwrEJV4txxkYuI)

#### 2. Difference between 2 flat JSON or YAML files
[![asciicast](https://asciinema.org/a/FNVtmp6H8iQRXIOdMKhnM7mr9.svg)](https://asciinema.org/a/FNVtmp6H8iQRXIOdMKhnM7mr9)

#### 3. Difference between 2 nested JSON or YAML files in a stylish format
[![asciicast](https://asciinema.org/a/P9dKhxoPS4jXXTOxXy8YRKR5P.svg)](https://asciinema.org/a/P9dKhxoPS4jXXTOxXy8YRKR5P)

#### 4. Difference between 2 nested JSON or YAML files in a plain format
[![asciicast](https://asciinema.org/a/285HG9AH0LcRGYB2TOzJwysL2.svg)](https://asciinema.org/a/285HG9AH0LcRGYB2TOzJwysL2)

#### 5. Difference between 2 nested JSON or YAML files in a JSON format
[![asciicast](https://asciinema.org/a/6ILMlTwenQ5NL35c5LL2NGnev.svg)](https://asciinema.org/a/6ILMlTwenQ5NL35c5LL2NGnev)
