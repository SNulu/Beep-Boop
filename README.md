# _Beep-Boop_

#### *Web Application*

#### *Sanyu Prado*

## Description

_Web Application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with a set of exceptions_

## Setup/Installation Requirements

* _Clone from Repository._
* _Open `index.html` to run in local browser._
* _Go to [gh-page](https://snulu.github.io/Beep-Boop/) for live demo._


## Known Bugs

_None known_

## Specs
  - Numbers that don't include `1`, `2` or `3`.

    Example:
    * _*input: *_ `0`.
    * _*output:*_ Number `0`.
        ```
        0
        ```

  - Substitute numbers that includes `1`.

    Example:
    * _*input: *_ `1`.
    * _*output:*_ Number `0` and `1` is substituted by `Beep!`.,wk
        ```
        0 Beep!
        ```

  - Substitute numbers that include `2`.

    Example:
    * _*input: *_ `2`.
    * _*output: *_ Number `0`, number `1` substituted by `Beep!` and number `2` substituted by `Boop!`.
      ```
      0 Beep! Boop!
      ```

  - Substitute numbers that include `3`.

    Example
    * _*input: *_ `9`.
    * _*output: *_ Number `0`, number `1` substituted by `Beep!`, number `2` substituted by `Boop!` and number `3` substituted by `I'm sorry, Dave. I'm afraid I can't do that.`.
      ```
      Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that. 4 5 6 7 8 9
      ```

  - Example with list of numbers that includes `1`, `2` or `3`.
    * _*input: *_ `24`
    * _*outuput: *_
      ```
      0 Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that. 4 5 6 7 8 9 Beep! Beep! Boop! I'm sorry, Dave. I'm afraid I can't do that. Beep! Beep! Beep! Beep! Beep! Beep! Boop! Boop! Boop! I'm sorry, Dave. I'm afraid I can't do that. Boop!
      ```

## Technologies Used

_HTML, CSS, Bootstrap, Javascript and Jquery were used_

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **_{List of contributors or company name}_**
