const leapyear = function (year)
{
  //  if (year === "string")
  //  {return ("this is'nt a year")}
  //  else ( year === "number" && year > 0)
   // {
if (year % 4 === 0)
{
if (year % 100 === 0){
 return ("true");

}
 else (year % 400 === 0 )
{
return ("false")

}

}
   // }

else 
return (year);
}
undefined
leapyear (2000)
"true"
leapyear (2019)
2019
leapyear (1988)
"false"

-------------------


const leapyear = function (year)
{
  //  if (year === "string")
  //  {return ("this is'nt a year")}
  //  else ( year === "number" && year > 0)
   // {
       // function Math.floor
if (year % 4 === 0 && year % 100 ===0 || year %4===0 && year % 400 !== 0 )
{
    return ("true");
}
else 
return ("false");
}
undefined
leapyear (1996)
"true"
leapyear (2000)
"true"
leapyear (1997)
"false"
leapyear (1900)
"true"