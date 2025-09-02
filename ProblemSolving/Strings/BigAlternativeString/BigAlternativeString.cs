/*
Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.

Solution:

To solve this problem, we can use the following approach:

1. Identify all unique characters in the string.
2. Generate all possible pairs of these characters.
3. For each pair, create a new string containing only the characters from the pair.
4. Check if the new string is valid (i.e., it contains only two distinct characters and they alternate).
5. Keep track of the length of the longest valid string found.


2- combination =(TotalLength/pair)= TotalLength!/pair!(TotalLength-pair)

*/
namespace ProblemSolving.Strings.BigAlternativeString;
public static class BigAlternativeString
{
    public static void BigAlternativePairString(string str)
    {
        char[] uniqueCharacters = str.Distinct().ToArray();

        // get pair conbinations

        // var pairCombinations = new List<string>();
        var pairCombinations = new HashSet<string>();

        for (int i = 0; i < uniqueCharacters.Length; i++)
        {
            for (int j = i + 1; j < uniqueCharacters.Length; j++)
            {
                pairCombinations.Add($"{uniqueCharacters[i]}{uniqueCharacters[j]}");
                //pairCombinations.Add($"{uniqueCharacters[i]}{uniqueCharacters[j]}");
                Console.WriteLine($"({uniqueCharacters[i]},{uniqueCharacters[j]})");
            }
        }

        var maxLength = 0;
        foreach (var pair in pairCombinations)
        {
            char firstChar = pair[0];
            char secondChar = pair[1];
            var newstring = str.ToCharArray().Where(x => x == firstChar || x == secondChar).ToArray();
          
            Console.WriteLine(newstring);
          
          
            bool isAlternating = true;
            for (int i = 0; i < newstring.Count(); i++)
            {
                if ((i + 1) < newstring.Length && newstring[i] == newstring[i + 1])
                {
                    isAlternating = false;
                    break;
                }
            }
            if (isAlternating && newstring.Length > maxLength)
            {
                maxLength = newstring.Length;
            }
        }

        Console.WriteLine($"Max Length: {maxLength}");
    }

}