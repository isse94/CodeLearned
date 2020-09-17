


// // var housing = [17,16,15,30,19,67,12,11,5]


//   // function addItem(item) {
//   //   var index = housing.findIndex(x => x == item)
//   //   if (index === -1) {
//   //     housing.push(item);
//   //   }else {
//   //     console.log("house number " + item + " already exists.")
//   //   }
//   // }

//   // var item = 17;
//   // addItem(item);
//   // console.log(housing);

//     //example i made..
//   var housing = [17,16,15,30,19,67,12,11,5]

//   function addItem(item, item2) {
//    for (let i = 0; i < housing.length; i++) {

//     if(housing.indexOf(item) !== -1){

//       console.log("House no. " + item + " exists..");

//     }
//     if(housing.indexOf(item2) !== -1){

//       console.log("House no. " + item2 + " exists..");
//       break;
//     }
//     if(housing.indexOf(item) == -1){

//       housing.push(item);
//     }

//     if(housing.indexOf(item2) == -1){

//       housing.push(item2);
//       break;
//     }


//     // else {
//     //   housing.push(item);
//     //   housing.push(item2);
//     //   break;
//     // }


//    } // end of for loop
//     return housing;
//   } // end of function addItem.

//    var item = 19;
//    var item2 = 154;
//    addItem(item,item2);
//   console.log(housing);

  /////////////////////////////////////



//2Sum ----
//MY WAY
// var results = [];
// function twoSum(nums, target){
//  nums = nums.sort((a,b) => a-b);
// for (var i = 0; i < nums.length; i++){
//   var sum = target - nums[i] - nums[i+1] ;
//    if(sum === 0)
//     results.push(i,i+1)
// }
//   return results;
// };

//OR
//   function twoSum(nums, target) {
//     for(let i = 0; i < nums.length; i++){
//         var loop1 = nums[i];
//     for(let j = 0; j < nums.length; j++){
//       var loop2 = nums[j];
//        var sum = loop1 + loop2;
//         if (sum === target){
//             return ([i,j])
// }
// }

// }

// };



//////////////////////////////////////

  //4Sum ----

//  var nums = [1, 0, -1, 0, -2, 2];
// //  nums = nums.sort((a,b) => a-b);    // [-2,-1, 0, 0, 1, 2]
// //SORT ^ NUMBER INSIDE FUNCTION
// var results = [];
//  var target = 0;
//  console.log(nums + " [original]");


//  function fourSum (nums, target) {
//  // var results = [];
// //   if(nums.length == 0)
// //       return results;          // NOT NEEDED

// nums = nums.sort((a,b) => a-b);

//   for(var i = 0; i < nums.length; i++){
//     // console.log(nums); START FRM [O] therefore looped 5 times.(-2 till 2)
//       var target2 = target - nums[i];
//       //  console.log(target2);                           // allows for singular count.

//       for(var j = i + 1; j < nums.length; j++){
//         // j = i + 1 ALLOWS for target 3 to = target - nums[i] - nums[j] where numbers j will be the next number AFTER nums[i]...
//         //.. which will ultimetly move along and allow for all left sided combinations. (THEFORE NEVER THE SAME NUMBER AS nums[i] )
//           var target3 = target2 - nums[j];              //// allows for triple count.. target - nums[i] - nums[j].
//                                                       // Therefore begining of Array (left side) & allows for array to be split.

//           var front = j + 1; //(i+2) ..mid point
//           var back = nums.length - 1; //is 2 beacuse end of Array
//             // therefore Array split into 2 now.                     therefore now have left & right side of array.

//           while(front < back){  //while midpoint < end of array (DEALING WITH RIGHT SIDE & moving it depending on what happening & capture solution).
//               var sum = nums[front] + nums[back];  //^ collect sum of mid-point till end (sum of right side of array).

//               if(target3 > sum)                 // if left side is > right side .. increment front (increase right side)
//                   front++;

//               else if(target3 < sum)            // if left side is < right side .. decrease back (decrease right side)
//                   back--;

//               else{
//                   var temp = new Array(4);
//                   temp[0] = nums[i];
//                   temp[1] = nums[j];
//                   temp[2] = nums[front];                // else create a new array with 4 index's and push too empty results array
//                   temp[3] = nums[back];                 // && (SEE BELOW COMMENTS) .. get front & back moving
//                   results.push(temp);                   // must push to capture solution

//                   while(front < back && nums[front] === temp[2]) // while front < back & numsF = NUMSF increment front
//                       front++;

//                   while(front < back && nums[back] === temp[3])   // while front < back & numsB = NUMSB decrease back
//                       back--;
//               }
//           }
//             // if above ^ is not the problem then // increment left sides and keep the loop moving depending on whats happening.
//           while(j + 1 < nums.length && nums[j + 1] === nums[j]) //while index j is within array && next j == previous j
//           ++j;                                                  // increment j
//       }

//       while(i + 1 < nums.length && nums[i + 1] === nums[i]) //while index i is within array && next i == previous i
//         ++i;                                                // increment i.

//               //!!!! NOTE: both loops continued. (NOT NEEDED AS LOOP WILL DO THIS AUTOMATICALLY )

//   }

//   return results;
// };

// PRACTISING THE ABOVE!!!!!!!!!!!!!!!!!!!!
// var results = [];

// function fourSum(nums,target) {
//   nums = nums.sort((a,b) => a-b);

//   for (var i = 0; i < nums.length; i++) {
//     var target2 = target - nums[i] // singular count;
//     for (var j= i + 1; j < nums.length; j++) {
//       var target3 = target2 - nums[j]  // now have left side n 3 counts

//       // right side
//       var front = j + 1; // starting from midpoint of array
//       var back = nums.length -1  // ends end of array

//       while(front < back ) {
//         var sum = nums[front] + nums[back]; // need to collect right side sums as we loop through
//         if(target3 > sum)
//         front++;    // if left side > right need to move right side along
//         else if(target3 < sum)
//         back--;    // if left side < right need to move right side along (DECREASE IT)

//         else{ // need to keep moving left side stuff e.g. i++ & j++ (not essential as array will do it for us)
//           //& right side e.g. front++ and back -- (MUST BE DONE AND ALSO DONE INSIDE THIS ELSE ARRAY)
//           var temp = new Array(4);
//           temp[0] = nums[i];
//           temp[1] = nums[j];
//           temp[2] = nums[front];
//           temp[3] = nums[back];
//           results.push(temp);
//           while (front < back && nums[front] === temp[2])
//             front++;
//             while (front < back && nums[back] === temp[3])
//             back--;
//         }

//       }

//     }
//   }
//       return results;
// }


//////////////////////////////////////

  //3Sum ----
 var nums = [-1, 0, 1, 2, -1, -4];
 var target = 0;
 var results = [];

 var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b); // [-4,-1,-1,0,1,2]

  for(let i = 0; i < nums.length - 3; i++){ // [0],[1],[2]

   if(i == 0 || nums[i] > nums[i-1]){
     var start = i + 1;
      var end = nums.length - 1;

       while (start < end) {
           if (nums[i] + nums[start] + nums[end] == 0 ){
               var result = ([nums[i], nums[start],nums[end]]);
               results.push(result);                                    // collect if = 0
           }
           if(nums[i] + nums[start] + nums[end] < 0){
               var currentStart = start;
               while(nums[currentStart] == nums[start] && start < end){
                   start++                                                  // increment start if sum < 0
               }
           }
           else { var currentEnd = end;                                   // decrement end if sum > 0
                 while(nums[currentEnd] == nums[end] && start < end){     // while
                     end--

             }

           }
       }


   }

   }
return results;

};
