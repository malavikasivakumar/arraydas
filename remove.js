

function string(input)
{
const lastchar=input.charAt(input.length - 1)
const Rotate=lastchar+ input.substring(0, input.length - 1)
return Rotate
}
const original = 'hihellovanakam'
const rs= string(original)
console.log('originalstring', original)
console.log('rotated string',rs)

