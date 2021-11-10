function validation()
{
	var fname=document.registration.fname;
	var lname=document.registration.lname;
	var gname=document.registration.gname;
	var number=document.registration.pnum;

	if(namecheck(fname))
	{
		if(lastcheck(lname))
		{
			if(gendercheck(gname))
			{
				if(Mobilenum(number))
					{
					}
			}
		}
	}
	return false;
}
function namecheck(fname){
    var letters = /^[A-Za-z]+$/;
	if(fname.value.length==0)
	{
		alert('Please enter first name');
		fname.focus();
		return false;
	}

	else if(fname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		fname.focus();
		return false;
	}
}
function lastcheck(lname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lname.value.length==0)
	{
		alert('Please enter last name');
		lname.focus();
		return false;
	}
	else if(lname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		lname.focus();
		return false;
		
	}
}
function gendercheck(gname)
{
	if(gname.value == "Default")
	{
		alert('Select your gender');
		gname.focus();
		return false;
	}
	else
	{
		return true;
	}
}
function Mobilenum(number)
{ 
	var numbers = /^[0-9]+$/;
	if(number.value.length==0 )
	{
		alert('Please enter contact number');
		fname.focus();
		return false;
	}
	else if(number.value.length>10)
	{
		alert('Please enter a valid contact number');
		lname.focus();
		return false;

	}
	else if(number.value.match(numbers))
	{
		alert('Form Succesfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check your contact number');
		return false;
	}
}