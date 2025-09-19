public static class TheLoveLetterMystery
{
    /*
        James found a love letter that his friend Harry has written to his girlfriend. James is a prankster, so he decides to meddle with the letter. He changes all the words in the letter into palindromes.

    To do this, he follows two rules:

    He can only reduce the value of a letter by , i.e. he can change d to c, but he cannot change c to d or d to b.
    The letter  may not be reduced any further.
    Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations required to convert a given string into a palindrome.

    Example

    The following two operations are performed: cde → cdd → cdc. Return .

    */

    public static void Execute(string s)
    {
        int operations = 0;
        int n = s.Length;

        for (int i = 0; i < n / 2; i++)
        {
            char left = s[i];
            char right = s[n - i - 1];
            operations += Math.Abs(left - right);
        }
        Console.WriteLine(operations);
    }


    public static void ExecuteWithNewString(string s)
    {
        int operations = 0;
        int n = s.Length;
        char[] newSting = new char[n];
        if (n % 2 == 1)
        {
            var mid = (n / 2);
            newSting[mid] = s[mid];
        }

        for (int i = 0; i < n / 2; i++)
        {
            char left = s[i];
            char right = s[n - i - 1];


            operations += Math.Abs(left - right);
            //optional code

            if (left < right)
            {
                newSting[i] = s[i];
                newSting[n - i - 1] = (char)(s[n - i - 1] - Math.Abs(left - right));
            }
            else
            {
                newSting[i] = (char)(s[i] - Math.Abs(left - right));
                newSting[n - i - 1] = s[n - i - 1];
            }
        }
        Console.WriteLine(newSting);
        Console.WriteLine(operations);
    }


}