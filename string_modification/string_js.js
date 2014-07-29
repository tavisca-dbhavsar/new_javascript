window.onload=function(){
  var btnlen=document.getElementById("btnlen");
  var btnconcat=document.getElementById("btnconcat");
  var btnlastIndexOf=document.getElementById("btnlastIndexOf");
  var btnindexOf=document.getElementById("btnindexOf");
  var btnreplace=document.getElementById("btnreplace");
  var btnsubstring=document.getElementById("btnsubstring");

var btnCharAt=document.getElementById("btnCharAt");

function customString (string1,string2,string3)
{

  this.string1=string1;
  this.string2=string2;
  this.string3=string3;

}
btnlen.onclick= function()
{
 
debugger;
   var string1 = document.getElementById('str4').value;
   var string2 = document.getElementById('str2').value;
   var string3 = document.getElementById('str3').value;
  if(typeof(string1)=='string' ){
    var s = new customString(string1,string2,string3);

    s.newlength1();
  }
  else
{
    throw("enter string value");
}
};

customString.prototype.newlength1= function() {
  debugger; 
   
    var len = 0;
  
    while (this.string1[len]) {
        len = len + 1;
    }
    outputStr.value = len;
  //}
}

btnconcat.onclick=function()
{
   var string1 = document.getElementById('str1').value;
    var string2 = document.getElementById('str2').value;
    var string3 = document.getElementById('str3').value;
    if(typeof(string1)=='string' && typeof(string2)=='string'){
    var s = new customString(string1,string2,string3);
    s.newconcat();
  }
  else{
    throw("enter string value");
  }
};
customString.prototype.newconcat= function() {
    if ((typeof (this.string1) == 'string') && (typeof (this.string2) == 'string')) {
        var outString = this.string1 + this.string2;
        outputStr.value = outString;
        string1 = "";
    }
    else {
        alert("enter string only");
    }
}



customString.prototype.newsubstring= function() {

/*    var j = 0;
    var str=' ';
   for(var i=this.string2;i<this.string3;i++)
   {
    str=str.concat(this.string1[i]);
   }
    outputStr.value = str;*/

    var start = parseInt(this.string2);
    var len = parseInt(this.string3);
    if(start <0 || start>this.string1.length)
        //throw ("value is not in range");
      outputStr.value=-1;

    if(len>(this.string1.length-start))
        //throw ("value is not in range");
       outputStr.value=this.string1;


    var strResult=' ';
   
    while (this.string1[start] && (len>0)) {
        strResult=strResult.concat( this.string1.charAt(start)); 
        start = start+ 1;
        len =len- 1;
        
    }
    outputStr.value = strResult;
}

btnsubstring.onclick=function()
{
   var string1 = document.getElementById('str4').value;
    var string2 = parseInt(document.getElementById('strin').value);
    var string3 = parseInt(document.getElementById('strend').value);
    if(typeof(string1)=='string'){
    var s = new customString(string1,string2,string3);
    s.newsubstring();
  }
  else{ throw("enter string value");}
}

customString.prototype.newcharAt= function() {
 
  //outputStr.value = this.string1[this.string2];

    var l=parseInt(this.string1.length);
    var value = parseInt(this.string2);
   // if((value <0) || (value > this.string11.length))
   if((value <0) || (value > l))
    {
        //throw("value not in range");
       outputStr.value="";
    }
    else{
    outputStr.value=this.string1[value];}

}
btnCharAt.onclick=function(){
    var string1 = document.getElementById('str4').value;
    var string2 = document.getElementById('str5').value;
     var string3 = document.getElementById('str3').value;
    if(typeof(string1)=='string' )
    {
      var s = new customString(string1,string2,string3);
    //outputStr.value = string1[position];
     s.newcharAt()
    }
    else{
     throw("enter string value");
   }
}
customString.prototype.newlastIndexOf= function() {
  debugger;

    var strResult=-1;
   var i=0,j=0;
    while(this.string1[i])
    {
        if(this.string1[i]==this.string2[j])
        {
            strResult=i;
        }
        i=i+1;
    }
    outputStr.value=strResult;
}


 btnlastIndexOf.onclick=  function()  {
   // var string1 = document.getElementById('str1').value.length;
   var string1 = document.getElementById('str1').value;
      var string2 = document.getElementById('str2').value;
     var string3 = document.getElementById('str3').value;
     if(typeof(string1)=='string' && typeof(string2)=='string')
     {
       var s = new customString(string1,string2,string3);
       s.newlastIndexOf();
     }
   else{ throw("enter string value");}
};

customString.prototype.newindexOf= function() {

 /* var i = 0;
    while (this.string1[i] != this.string2) {
        i++;
    }
    outputStr.value = parseInt(i) */
    var set=0;
var strResult=0;
while (this.string1[strResult]) {
if (this.string1[strResult] == this.string2) {
set=1;
break;
}
else {
set=0;
strResult += 1;

}
}
if(set==0)
outputStr.value = -1;
else
outputStr.value=strResult;


}
btnindexOf.onclick=function() {
    var string1 = document.getElementById('str1').value;
    var string2 = document.getElementById('str2').value;
      var string3 = document.getElementById('str3').value;
        var s = new customString(string1,string2,string3);
     s.newindexOf();
   

};

customString.prototype.newreplace= function() {
 debugger;
 var i = 0;
    var str=' ';
   len=this.string1.length;
   
  var s,s1=' ';
  var j=0;
  for(var i=0;i<len;i++)
  {
      if (this.string1[i] ==this.string2)
      {
        s1=s1.concat(this.string3.charAt(j));
      }
      else{
        s1=s1.concat(this.string1.charAt(i));
      }
  }
  outputStr.value = s1; 

   /*var index=0,i=0;
    var strResult=' ';
   debugger;
   var k=0;
   index=this.string1.indexOf(this.string2);
   //outputStr.value=index;
   if(index)
   {i=0;
    while(this.string3[i])
    {
        if(i==index){
            
            for(j=0;j<this.string3.length;j++)
            {
            strResult=strResult.concat(this.string3.charAt(j));
            
            }
            i=i+this.string2.length;

            }
        else{
            strResult=strResult.concat(this.string1.charAt(i));
            i=i+1;
        }
    }
    outputStr.value=strResult;
   }
   else{
    throw("string not found");
   }
 
    outputStr.value = strResult;*/

}


 btnreplace.onclick= function() {
  debugger;
    var string1 = document.getElementById('str1').value;
    var string2 = document.getElementById('str2').value;
    var string3 = document.getElementById('str3').value;
   
if(typeof(string1)=='string' && typeof(string2)=='string' && typeof(string3)=='string')
{
  var s= new customString(string1,string2,string3);
  s.newreplace();
}
else{ throw ("enter string value");}
}
}