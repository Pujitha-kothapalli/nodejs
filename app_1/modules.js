// // // // var fs = require('fs')

const chalk = require("chalk");

 // fs.readFile("./text.txt","utf8" ,function(err,data){   //if "utf8" is omitted then the text is displayed in bits , if it is written as a 2nd parameter then the text is displayed in text
/ //     if(err){
 //         console.log("error in reading file")
 //     }
 //     else{
 //         data = data.toUpperCase()
 //         console.log(data)

 //     }
 // })

 // var os = require('os')
 // console.log(os.hostname())

// // var calc = require('./userdefine')
// // console.log(calc.add(56,66))
// // console.log(calc.sub(20,3))
// // console.log(calc.mul(54,21))
// // calc.div(13,1,(err,result)=>{
// //     if(err){
// //         console.log(err)
// //     }
// //     else{
// //         console.log(result)
// //     }
// // })

// var fs = require('fs')
// fs.readFile("./text1.txt","utf8",function(err,data){
//     if(err){
//         console.log("error in reading file")
//      }
//     else{
//         data = data.toUpperCase()
//         console.log(data)
//      }
        
// })

//import chalk from 'chalk';

//console.log(chalk.blue('Hello world!'));

var chalk1 = require('chalk')

const name = 'Sindre';
console.log(chalk1.green('Hello %s'), name);
//=> 'Hello Sindre'

const log = console.log;

// Combine styled and normal strings
log(chalk1.blue('Hello') + ' World' + chalk1.red('!'));

// Compose multiple styles using the chainable API
log(chalk1.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk1.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk1.red('Hello', chalk1.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk1.green(
	'I am a green line ' +
	chalk1.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk1.red('90%')}
RAM: ${chalk1.green('40%')}
DISK: ${chalk1.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk1.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk1.hex('#DEADED').bold('Bold gray!'));
