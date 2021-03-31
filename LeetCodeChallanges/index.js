


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
//  var nums = [-1, 0, 1, 2, -1, -4];
//  var target = 0;
//  var results = [];
//
//  var threeSum = function(nums) {
//   nums = nums.sort((a, b) => a - b); // [-4,-1,-1,0,1,2]
//
//   for(let i = 0; i < nums.length - 3; i++){ // [0],[1],[2]
//
//    if(i == 0 || nums[i] > nums[i-1]){
//      var start = i + 1;
//       var end = nums.length - 1;
//
//        while (start < end) {
//            if (nums[i] + nums[start] + nums[end] == 0 ){
//                var result = ([nums[i], nums[start],nums[end]]);
//                results.push(result);                                    // collect if = 0
//            }
//            if(nums[i] + nums[start] + nums[end] < 0){
//                var currentStart = start;
//                while(nums[currentStart] == nums[start] && start < end){
//                    start++                                                  // increment start if sum < 0
//                }
//            }
//            else { var currentEnd = end;                                   // decrement end if sum > 0
//                  while(nums[currentEnd] == nums[end] && start < end){     // while
//                      end--
//
//              }
//
//            }
//        }
//
//
//    }
//
//    }
// return results;
//
// };


// ////////////////// ORRRRR THREE SUM (practice 2)
// var nums = [-1,0,1,2,-1,-4] ;
// // [-4,-1,-1,0,1,2]
// nums = nums.sort((a,b) => a-b);
// var result = [];
// function threeSum() {
//
//   for (let i = 0; i < nums.length - 3 ; i++) {
//
//   // nums[i];-4,-1..........
//   let l1 = i + 1 ;  //-1,-1,0
//   let r1 = nums.length - 1 // 2
//   if (nums[i-1] < nums[i]) { // mainCONDTION-1 previous value less that current. STOPS DUPLICATES
//
//   while (l1 < r1 ) { // mainCONDTION-2 conditon of exacution happening as long as we are with last array index..  e.g. index of 5 <  index 6 (5 is where l1 will stop OTHERWISE IT WILL KEEP ON RUNNING THEREFORE CRASH SITE)
  ///**  execution of what we are trying to find out.(which is the sum) **
//     let sum = nums[i] + nums[l1] + nums[r1];  // start of finding sum
//     // console.log(sum);
//     if (sum === 0) { //
//     result.push([nums[i] , nums[l1] , nums[r1]])     // while all while conditions(below while's) are run they are put through this if.
//     }
      // ** if execution of what we are finding is not met then exacuate the following if n else conditions to find it ***
//     if (sum < 0) {
//       let l2 = l1; // IMPORTANT to capture it and then move it along
//       while (l2 === l1 && l1 < r1 ) {  //run while1 l2 < r1 condition ^ is linked.. & therefore l2++ (the result of incrementing of 1 is run back again into flow of while1 condtion)
//         l1 ++;
//       }
//     }
//     else {
//       let r2 = r1; // IMPORTANT to capture it and then move it along backwards 1
//       while (r1 === r2 && l1 < r1) { //  else decrement of -1 run into while-condition1
//         r1--
//       }
//     }
//
//   } // end of while1
//
//
//   } // end of if 1
//   } // end of loop1
//
//
//
//
// }  // end of function
//
// threeSum(nums)
// console.log(result);
/////////// OR USE THIS FORLOOP: (for three sum)
// for (let i = 0; i < nums.length -3 ; i++) {
// let l1 = i + 1;
// let r1 = nums.length - 1;
//
// if (nums[i-1] < nums[i]) {
//
// while (l1 < r1) {
//   let sum = nums[i] + nums[l1] + nums[r1];
//   if (sum === 0) {
//     result.push([nums[i], nums[l1],  nums[r1]])
//   }
//   if (sum < 0) {
//     let l2 = l1;
//     while (l1 === l2 && l1 < r1) {
//       l1 ++;
//     }
//   }
//   else {
//     let r2 = r1;
//     while (r1 === r2 && l1 < r1) {
//       r1--;
//     }
//   }
//
// }
//
//
// }
//
//
// }

///////// OR USE... for threeSum (NEED TO figure out how to remove duplicates in this one)
// function threeSum() {
//         nums = nums.sort((a, b) => a - b); // [-4,-1,-1,0,1,2]
//         for (let i = 0; i < nums.length - 2; i++) {
//         for (let j = i + 1; j < nums.length - 1; j++) {
//         for (let k = j + 1; k < nums.length; k++) {
//           const a = nums[i];
//           const b = nums[j];
//           const c = nums[k]
//           let sum = a + b + c;
//           if (sum === 0 && result.indexOf(nums) === -1) {
//             result.push([a , b , c]);
//           }
//
//         }
//         }
//         }
//         return result;
// }
//
// threeSum(nums);
// console.log(result);






//////////////////////////////////////////////////////////////////////////////
//
// MY FINAL VERSION 2SUM
var nums = [2,7,11,15] ;
 var target = 9;
 var results = [];
 // function twoSum (nums, target) {
 //   // nums = nums.sort((a,b) => a-b);
 //   for (let i = 0; i < nums.length; i++) {
 //     var firstCount = nums[i];
 //     var secondCount = nums[i+1];
 //     var start = nums[0];
 //     var end = nums.length - 1;
 //     // console.log(nums.indexOf(start));
 //     // console.log(end);
 //     var sum = firstCount + secondCount;
 //    if (sum === target) {
 //      var firstIndex = nums.indexOf(firstCount);
 //      // console.log(firstIndex);
 //      var secondIndex = nums.indexOf(secondCount);
 //      // console.log(secondIndex);
 //      var resultFound = [firstIndex, secondIndex];
 //      // console.log(resultFound);
 //      results.push(resultFound);
 //    }
 //
 //   }
 // };
 // twoSum(nums, target);
 // console.log(results);

//OR
function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var firstCount = nums[i];
    // console.log(firstCount);
    for (var j = i+1; j < nums.length; j++) {
      var secondCount = nums[j];
      var sum = firstCount + secondCount;
      if (sum === target) {
        var result = [nums.indexOf(firstCount), nums.indexOf(secondCount)];
        console.log(result);
        results.push(result);
      } // end of if
    } // second forloop
  } // first forloop


}

twoSum(nums, target);
console.log(results);



 // console.log(results);

// let nums = [2,7,11,15] ;
// let target = 9;
// let results = [];
// const twoSum = (nums, target) => {
//     nums = nums.sort((a,b) => a-b);
//     for(let i=0; i<nums.length; i++){
//         var start = nums[0];
//         var end = nums[i];
//         var sum = start + end;
//         if(sum === target) {
//             var result = [nums[start],nums[end]]
//             results.push(result)
//         }
//     }
//     return result
// };
//
//  twoSum(nums, target);
//  console.log(results);


// /// MY FINAL VERSION 3SUM
// var nums = [-1,0,1,2,-1,-4] ;
// var result = [];
//
// function threeSum(nums) {
// nums = nums.sort((a,b) => a-b);
//
//
// for (var i = 0; i < nums.length -3 ; i++) {
// // console.log(nums[i]); // -4-1-1
// var leftSide1 = nums[i]; //
// var leftSide2Index = i+1;
// // console.log(nums[leftSide2Index]);
// var rightSideIndex = nums.length -1;
// // console.log(nums[i]);
// if (nums[i-1] < nums[i]) {
//
// while (leftSide2Index < rightSideIndex) {
//   var sum = leftSide1 + nums[leftSide2Index] + nums[rightSideIndex];
//   if (sum === 0) {
//     var resultsFound = [leftSide1, nums[leftSide2Index], nums[rightSideIndex] ];
//     result.push(resultsFound);
//   }
// if (sum < 0 ) {
//   var currentLeftSide2Index = leftSide2Index;
//   while (currentLeftSide2Index == leftSide2Index && leftSide2Index < rightSideIndex) {
//     leftSide2Index ++;
//   }
// }
// else {
//   var currentRightsideIndex = rightSideIndex;
//   while (currentRightsideIndex == rightSideIndex && leftSide2Index < rightSideIndex) {
//     rightSideIndex--;
//   }
// }
//
//
// }
//
//
// } // if1
// }  // end of for loop
// }  // end of function
//
// threeSum(nums);
// console.log(result);



















 //
