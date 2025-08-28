using System.Text.RegularExpressions;

public static class SuperReduceString
{
    public static void SuperReduce(string s)
    {
        var stack = new Stack<char>();
        foreach (var c in s)
        {
            if (stack.Count > 0 && stack.Peek() == c)
            {
                stack.Pop();
            }
            else
            {
                stack.Push(c);
            }
        }
        var result = new string(stack.ToArray());
        Console.WriteLine(result.Length == 0 ? "Empty String" : result);
    }

    public static int MinimumNumber(int n, string password)
    {
        int minimumRequired = 0;

        if (!Regex.IsMatch(password, "[0-9]")) minimumRequired++;
        if (!Regex.IsMatch(password, "[a-z]")) minimumRequired++;
        if (!Regex.IsMatch(password, "[A-Z]")) minimumRequired++;
        if (!Regex.IsMatch(password, "[!@#$%^&*()-+]")) minimumRequired++;
        if (n < 6) minimumRequired += 6-minimumRequired - n;
        if (n > 6 && password.Length < n) minimumRequired++;

        return minimumRequired;

    }
}