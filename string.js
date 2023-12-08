function note(input)
{
    if(input.length< 2)
    {
        return input
    }

const firstchar = input.charAt(0)
const lastchar = input.charAt(input.lengthc- 1)
const centre  =input.slice(1, -1)
const newstring = lastchar+centre+firstchar
return newstring
}
 
const original = 'modernworld'
const modify = note(original)
 console.log('orgininal string',original)
 console.log('modified string',modify)


