function verif(){
    
//nom et prénom
 x = document.getElementById("np").value;
    ch =  'azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN ';
    if( x.length == 0 )
        {alert("Merci d'entrer un nom et un prénom valides ! الرجاء التثبت من الاسم واللقب");return false;}
    for (i=0 ; i<x.length ; i++)
    if (ch.indexOf(x[i]) == -1) 
        {alert("Merci d'entrer un nom et un prénom valides ! الرجاء التثبت من الاسم واللقب");return false;}
    
//sexe
if ( ( document.getElementById("hom").checked == false ) && ( document.getElementById("fem").checked == false ) ) 
{
alert ( "merci de choisir Homme ou Femme" ); return false;}
   
//cin 
 x = document.getElementById("cin").value;
if (x.length != 8)
        {alert("Merci d'entrer un numéro de CIN valide! الرجاء التثبت من رقم بطاقة التعريف الوطنية");return false;}

if (isNaN(x))
        {alert("Merci d'entrer un numéro de CIN valide ! الرجاء التثبت من رقم بطاقة التعريف الوطنية");return false;}
    
//vous etes 
if(document.getElementById("vous").selectedIndex==0)
{ alert("merci de choisir votre situation actuelle   الرجاء التثبت من الوضع الحالي ");return false;}    
    
//projet    
if(document.getElementById("projet").selectedIndex==0)
{ alert("avez vous un projet ?  هل لديك مشروع ؟ ");return false;}

//microcredit 
  if ( ( document.getElementById("int").checked == false ) && ( document.getElementById("tan").checked == false ) &&     (document.getElementById("taw").checked == false )  ) 
{
alert ( "merci de choisir votre microcrédit demandé" ); return false;} 
    
//montant 
    
 x = document.getElementById("mont").value;
    if(isNaN(x))
        { alert("merci de choisir le montant  الرجاء التثبت من المبلغ ");return false;} 
    
    //intilak
    
if ( (document.getElementById("int").checked == true) && ((x>3000)||(x<500)) )
    {
       
        {alert ( "le montant choisi ne correspond pas a crédit intilak  المبلغ المختار لا يتوافق مع الائتمان intilak" ); return false;}
    }

    //tanmya
if ( (document.getElementById("tan").checked == true) && ((x>8000)||(x<3001)) )
    {
       
        {alert ( "le montant choisi ne correspond pas a crédit Tanmya  المبلغ المختار لا يتوافق مع الائتمان Tanmya" ); return false;}
    }

    //Tawfik
if ( (document.getElementById("taw").checked == true) && ((x<8001)||(x>20000)) )
    {
       
        {alert ( "le montant choisi ne correspond pas a crédit Tawfik  المبلغ المختار لا يتوافق مع الائتمان Tawfik" ); return false;}    
    
    }
//adresse projet
    
 if(document.getElementById("adresse").selectedIndex==0)
{ alert("veuillez choisir votre adresse   الرجاء اختيار عنوانك  ");return false;}

//delegation

if(document.getElementById("delegation").selectedIndex==0)
{ alert("veuillez choisir votre delegation اختيار ");return false;}    
    
//adresse    
 x = document.getElementById("ad").value;
    if(x.length == 0)
          {alert ( "Veuillez indique votre adresse du domicile!  ! الرجاء إدخال عنوانك الشخصى" ); return false;}
//telephone
 x = document.getElementById("tele").value;  
     if(x.length!=8)
    {alert ( "Merci d'entrer un Numéro de téléphone valide!   ! الرجاء التثبت من رقم هاتفك" ); return false;  }
    if(isNaN(x))
    {alert ( "Merci d'entrer un Numéro de téléphone valide!    ! الرجاء التثبت من رقم هاتفك" ); return false;  }
}