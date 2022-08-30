console.log(process.argv);
let numero = 0
for(let i = 2; i < process.argv.length; i++)
{
    numero += Number(process.argv[i]);
}
console.log(numero);