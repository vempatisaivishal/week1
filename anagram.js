function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join();
    const sortedStr2 = str2.split('').sort().join();
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram("anagram", "nagaram"));
//just split without space and sort and join then compare we get right answer
console.log(isAnagram("vishal", "hjgdgd"));