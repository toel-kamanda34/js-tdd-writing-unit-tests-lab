// Your tests here
import {isPalindrome} from "../utils"

describe("isPalindrome", () => {

  test("if the word reads the same forwards and backwards, it returns true", () => {

   const word="mum"

   const check=isPalindrome(word)

   expect(check).toBe(true)
  });

  test("if the word doesn't reads the same forwards and backwards, it returns false", () => {

   const words= "chapati"

   const check=isPalindrome(words)

   expect (check).toBe(false)
  })

  test("returns true if the word has a combination of lower and upper case letters", () => {

    const words= "MuM"

    const check=isPalindrome(words)

    expect(check).toBe(true)
  })

  it("throws an error if the input has any non-alphabetic characters", () => {
    const word = "race car";

    expect(() => isPalindrome(word)).toThrow();
  });

  it("throws an error if the input is an empty string", () => {
    const word = "";

    expect(() => isPalindrome(word)).toThrow();
  });



})