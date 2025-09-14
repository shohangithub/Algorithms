public static class WeightedUniformStrings
{
    /*
    A weighted string is a string of lowercase English letters where each letter has a weight. Character weights are  to  from  to  as shown below:

image

The weight of a string is the sum of the weights of its characters. For example:

image

A uniform string consists of a single character repeated zero or more times. For example, ccc and a are uniform strings, but bcb and cd are not.
Given a string, , let  be the set of weights for all possible uniform contiguous substrings of string . There will be  queries to answer where each query consists of a single integer. Create a return array where for each query, the value is Yes if . Otherwise, append No.

Note: The  symbol denotes that  is an element of set .

Example

.

Working from left to right, weights that exist are:

string  weight
a       1
b       2
bb      4
c       3
cc      6
ccc     9
d       4
dd      8
ddd     12
dddd    16
Now for each value in , see if it exists in the possible string weights. The return array is ['Yes', 'No', 'No', 'Yes', 'No'].

Function Description

Complete the weightedUniformStrings function in the editor below.

weightedUniformStrings has the following parameter(s):
- string s: a string
- int queries[n]: an array of integers

Returns
- string[n]: an array of strings that answer the queries

Input Format

The first line contains a string , the original string.
The second line contains an integer , the number of queries.
Each of the next  lines contains an integer , the weight of a uniform subtring of  that may or may not exist.
    
    */

    public static void Execute(string s, List<int> queries)
    {
      
        HashSet<int> weights = new HashSet<int>();
        int currentWeight = 0;
        char previousChar = '\0';

        foreach (char c in s)
        {
            int charWeight = c - 'a' + 1;
            if (c == previousChar)
            {
                currentWeight += charWeight;
            }
            else
            {
                currentWeight = charWeight;
                previousChar = c;
            }
            weights.Add(currentWeight);
        }

        List<string> result = new List<string>();
        foreach (int query in queries)
        {
            result.Add(weights.Contains(query) ? "Yes" : "No");
        }
        
        Console.WriteLine(string.Join("\n", weights));
        Console.WriteLine(string.Join("\n", result));

    }

}