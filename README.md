# React-Random-Code-Generator
Text, Number, Text+Number Random Code Generator

## Usage

first, install package.

> npm install react-random-code-generator --save

second, just Use

>
>
>import GenerateRandomCode from 'GenerateRandomCode';
>
> ...
>
>genetrateCode(){
>
>    return GenerateRandomCode.NumCode(4);
>
>  }
>  


## Syntax

TextCode(textLength);

>/* TextCode(5); //eidkn */

NumCode(numLength);

>/* NumCode(4); //3627 */

TextNumCode(textLength, numLength);

>/* TextNumCode(3,5); //sle78726 */
