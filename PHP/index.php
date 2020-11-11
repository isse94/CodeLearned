<?php

$name = "Isse";
echo "Hello world whats up hiddddddddddi  ";
echo $name;

$string1 = " <p>    hi there, ";
$string2 = "my name is isse </p>";

echo $string1."".$string2; 

$myNumber = 45;
$calculation = $myNumber * 2 + 1 ;

echo "<p> the result of the calculation is ".$calculation."</p>" ;

$myBool = false;
echo "<p> this statement is true?".$myBool."</p>";

$myArray = array("Isse","Ahmed","Salah");
$myArray [] = "Idiris";
print_r($myArray);

echo $myArray[1];


echo "<br> </br>";

$thirdArray = array("France" => "French",
                      "USA" => "English",);

print_r($thirdArray);

echo sizeof($thirdArray);

echo "<br> </br>";



if ($name == "Isse") {
  echo "youre correct" ;
}

else {
  echo "no the correct answer was ".$name ;
};

echo "<br> </br>";


$ageLimit = 18;

if ($ageLimit >= 18 || $name == "Isyyyse") {
  echo "great youre over 18";
}

else {
  echo "nope youre under age g";
}

echo "<br> </br>";


$family = array("isse", "abdulkadir", "isse", "ahmed", "salah");

foreach ($family as $key => $value) {
  echo "array item ".$key. " is ".$value." <br>";

  $family[$key] = $value. " sultan";
}

for ($i=0; $i < sizeof($family); $i++) {
  echo $family[$i]."<br>";
}

for ($i=10; $i >= 0 ; $i = $i - 1) {
  echo $i."<br>";
}



echo "<br> </br>";

$i = 5;

while ($i <= 50) {
echo $i."<br>";

$i = $i + 5 ;
}

echo "<br> </br>";

$colors = array("blue", "green", "yellow", "red", "pink");
$i=0;
while ($i < sizeof($colors)) {
  echo $colors[$i]."<br>";

  $i++;
}

echo "<br> </br>";

/* PART 15 GET VARIABLES
print_r($_GET);

if ($_GET) {

$i = 2;
$isPrime = true;
while ($i < $_GET ['number']) {
  if($_GET['number'] % $i = 0) {
    //not a prime number
    $isPrime = false
  }
  $i++;
}
if ($isPrime) {
  echo "<p>".$i."is a prime number </p>";
}

else {
  echo "<p>".$i."isnt a prime number </p>";
}
SEE MY WORK BOOK FOR MORE INFO!!!
}
*/



/*  print_r($_POST);

if ($_POST) {
  $family2 = array("Ronaldo" ," Messi","Neymar" );
  $isKnown = false;
  foreach ($family2 as $value) {
  if ($value == $_POST['name2']) {
    $isKnown = true;
  }
  }
  if ($isKnown) {
  echo "Hi there".$_POST['name2']."!";
  }
  else {
    echo "i dont know you?!";
  }
} SEE PART 17 OF MY WORK BOOK! */




/*SEE PART 17 OF MY WORK BOOK!
$emailTo = "isse@hotmail.com";
$subject = "i hope youre well";
$body = "i hope i see u soon";
$headers = "man-united@hotmail.com";

if (mail($emailTo,$subject,$body,$headers)) {
  echo "email was sent";
}
else {
  echo "email wasnt sent mateee";
}
SEE PART 19 OF MY WORK BOOK! */
?>



<form method="post" class="" action="index.html" method="post">
  <p>whats your name?</p>
<p> <input type="text" name="name2" value=""> </p>
<p>   <input type="submit" name="" value="submit"> </p>
</form>
