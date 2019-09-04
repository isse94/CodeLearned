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






?>
