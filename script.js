function firstWord(s) {
  // your code here
	let res=""
	s=s.trim();
	
	if(s.length==0)
	{
		return "";
	}
	
	for(let i=0;i<s.length;i++)
		{
			if(s.charAt(i)==" " ||s.charAt(i)=="\t" )
			{
				return res;
			}
			res+=s.charAt(i);
		}

	return res;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
