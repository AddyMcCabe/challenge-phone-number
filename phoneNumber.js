// first we know that we need a function that will take in an array of numbers so
// can set up a function with that param. next because we want to return a string from an array of values, we can set up 
// variable and set it equal to the desired output template like '(xxx) xxx-xxxx'. then all wee need to do is loop through
// the array and use the .replace methode to replace each 'x' with the element at wach index of the array.
 

// first we will write the function and call it.
// next we will set a phonenumber equal to (xxx) xxx-xxxx
// now we will use forEach on the arr and iterate through the elements only
// now that we have all the elements of the array we can set phonenumber equal to a version of itself where we replace all the 'x'
// with the elemts of the array

function createPhoneNumber(arr) {
    let phoneNumber = '(xxx) xxx-xxxx';

    arr.forEach(ele => {
        phoneNumber = phoneNumber.replace('x', ele)
    })
    
    return phoneNumber
}

console.log(createPhoneNumber([8,0,1,8,6,6,6,1,2,3]))


    




