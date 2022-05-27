/*Find the sum of all the multiples of 3 or 5 below 1000. */

//MULTIPLES OF 3:
//3 + 999 = 6 + 996 = 9 + 993 = ... = 1002, we have 166 pairs whose sum equals 1002 (and 501, which cannot be paired).
//Then, the sum of all multiples of 3 below 1000 is (1002*166) + 501

////MULTIPLES OF 5:
//5+995 = 10+ 990 = 15 + 985 = ... = 1000, we have 99 pairs whose sum equals 1000 (and 500, which cannot be paired).
//Then, the sum of all multiples of 5 below 1000 is (1000*99) + 500

//Finally, we must subtract once all multiples of both 3 and 5, since we have counted them twice (once as multiples of 3, another one as multiples of 5)
//Multiples of both 3 and 5 are multiples of 15:
//15 + 990 = 30 + 975 = 45 + 960 = ... = 1005, we have 33 pairs whose sum equals 1005.

//This problem could have been solved using a for and checking each natural number until reaching 999
//Solving the problem this way, we have a solution of complexity O(n-1)
//On the other hand, this solution provides O(1)

function problem1() {
    return (1002 * 166) + 501 + (99 * 1000) - (1005 * 33) + 500;
}


//Expected output: 233168
console.log(problem1());