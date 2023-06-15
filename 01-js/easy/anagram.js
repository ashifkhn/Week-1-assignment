/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false
	}
	let count =new Map()
	for (let letter of str1) {

			count.set(letter, (count.get(letter)||0) + 1)

	}

		console.log('second for loop')
	for (let item of str1) {
		if (!count.has(item)) {
			return false
		}
		count.set(item, count.get(item) - 1)
		if(count.get(item)===0){
			count.delete(item)
		}
  }

  return true;
}
console.log(isAnagram('ashif', 'qhesj'))

module.exports = isAnagram
