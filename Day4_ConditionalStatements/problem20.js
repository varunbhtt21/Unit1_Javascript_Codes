// Problem 1: If the number is divisible by 3, print a "multiple of 3".

var number = 15;

var remainder = number%3;

if(remainder == 0)
{
  console.log("Multiple of 3");
}
else
{
  console.log("Not multiple of 3");
}