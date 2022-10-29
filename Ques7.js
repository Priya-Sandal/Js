function reversenumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
// console.log(Number(reversenumber(32243)));
document.write(reversenumber(32243) );