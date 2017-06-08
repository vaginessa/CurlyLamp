var divs = ["p1", "p2", "p3", "contact", "licenses"];

function showDiv(divID)
{
  for(i = 0; i < divs.length; i++)
  {
    document.getElementById(divs[i]).style.display="none";
  }
  document.getElementById(divID).style.display="block";
}
