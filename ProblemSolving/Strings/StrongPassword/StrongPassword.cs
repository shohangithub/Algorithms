using System.Text.RegularExpressions;

public static class StrongPassword
{
    /*
    Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
    
    */

    public static void SetStrongPassword(int n, string password)
    {
        int minimumRequiredLength = 0;
        int patternNotMatchCount = 0;

        if (password.Length < 6) minimumRequiredLength = 6 - password.Length;
        if (password.Length < n && n > 6) minimumRequiredLength = n - password.Length;
        if (!Regex.IsMatch(password, @"\d")) patternNotMatchCount++;
        if (!Regex.IsMatch(password, @"[a-z]")) patternNotMatchCount++;
        if (!Regex.IsMatch(password, @"[A-Z]")) patternNotMatchCount++;
        if (!Regex.IsMatch(password, @"[!@#$%^&*()\-\+]")) patternNotMatchCount++;

        if (minimumRequiredLength > patternNotMatchCount)
            Console.WriteLine(minimumRequiredLength);
        else
            Console.WriteLine(patternNotMatchCount);
    }
}