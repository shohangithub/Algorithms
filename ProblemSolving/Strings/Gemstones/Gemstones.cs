using System.Net;

public static class Gemstones
{
    /*
    
    There is a collection of rocks where each rock has various minerals embeded in it. Each type of mineral is designated by a lowercase letter in the range . There may be multiple occurrences of a mineral in a rock. A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection.

Given a list of minerals embedded in each of the rocks, display the number of types of gemstones in the collection.

Example

The minerals  and  appear in each rock, so there are  gemstones.

Function Description

Complete the gemstones function in the editor below.

gemstones has the following parameter(s):

string arr[n]: an array of strings
Returns

int: the number of gemstones found
Input Format

The first line consists of an integer , the size of .
Each of the next  lines contains a string  where each letter represents an occurence of a mineral in the current rock.

     */

    // public static void Execute(List<string> arr)
    // {
    //     HashSet<char> commonElements = new HashSet<char>(arr[0]);

    //     foreach (string str in arr.Skip(1))
    //     {
    //         HashSet<char> currentSet = new HashSet<char>(str);
    //         commonElements.IntersectWith(currentSet);
    //     }

    //     Console.WriteLine(commonElements.Count);
    // }



    public static void Execute(List<string> arr)
    {
        var common_char = arr[0].ToHashSet();

        for (int i = 1; i < arr.Count; i++)
        {
            common_char.IntersectWith(arr[i]);
        }

        Console.WriteLine(common_char.Count());
    }
}