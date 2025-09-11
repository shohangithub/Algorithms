/*

We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. Remeber that a subsequence maintains the order of characters selected from a sequence.

More formally, let  be the respective indices of h, a, c, k, e, r, r, a, n, k in string . If  is true, then  contains hackerrank.

For each query, print YES on a new line if the string contains hackerrank, otherwise, print NO.

Example

This contains a subsequence of all of the characters in the proper order. Answer YES


This is missing the second 'r'. Answer NO.


There is no 'c' after the first occurrence of an 'a', so answer NO.

*/

public static class SubSequenceCharString
{

    public static string ContainsSubsequence(string input)
    {
        string target = "hackerrank";
        int targetIndex = 0;

        foreach (char c in input)
        {
            if (c == target[targetIndex])
            {
                targetIndex++;
                if (targetIndex == target.Length)
                {
                    return "YES";
                }
            }
        }

        return "NO";
    }

}