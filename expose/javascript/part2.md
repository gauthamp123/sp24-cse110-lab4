1. The output would be the length of prices which in this case is 3. The variable i was defined with the var keyword so its scope will be throughout the whole function. It breaks out of the loop when i == prices.length which in this case is 3.
2. The output is 150 which is the discount on the last price.
3. The output would be 150 because its the last iteration price calculation.
4. The function returns a list of all the prices after the discount is applied because discounted is within scope of the return statement and push appends values to the list.
5. This throws an error because i is declared with the let keyword and is out of scope of the console.log statement.
6. This throws an error because discountedPrice is declared with the let keyword and is out of scope of the console.log statement.
7. This returns the last value finalPrice was set to because it was declared outside the for-loop so it is within the scope of the print statement.
8. The function returns a list of all the prices after the discount is applied because discounted is within scope of the return statement and push appends values to the list.
9. This throws an error because i is declared with the let keyword and is out of scope of the console.log statement.
10. This returns the length of prices because its declared as a constant variable so that number would not change.
11. The function returns a list of all the prices after the discount is applied because discounted is within scope of the return statement and push appends values to the list.
12. Objects
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student.courseLoad[0]
13. Arithmetic
    1.  32, integers map to the exact string representation.
    2.  1, due to the - operation 3 is converted to an integer.
    3.  3, when null is added to an integer its converted to 0.
    4.  3null, since 3 is a string null is considered a string.
    5.  4, when adding an integer to a boolean true is considered as 1.
    6.  0, false is considered 0 and null is also considered 0.
    7.  3undefined, when the + operator is added to undefined, undefined becomes a string.
    8.  NaN, when - operator is used it acts as an integer and undefined would just lead to a undefined value.
14. Comparison
    1.  true, the string is converted to an integer for comparison.
    2.  true, both strings are converted to integers for comparison.
    3.  true, both strings are converted to integers for comparison.
    4.  false, === means strictly equals so it looks at type as well.
    5.  false, true is equated with 1 which does not equal 2.
    6.  true, a nonzero number when put into Boolean() will return true so you are checking if true strictly equals true.
15. == means equals where type conversion happens behind the scenes and === means strictly equals where type of each object matters.
16. See part2-question16.js
17. When running the function you will end up with a list of all the numbers multiplied by 2 as per the doSomething function. The function is being passed into another function which in this case the reference of doSomething is stored in callback.
18. See part2-question18.js
19. It prints 1, 4, 3, 2 because we set a timeout for printing 3 and 2 making 2 longer. This makes it so the console delays the printing.