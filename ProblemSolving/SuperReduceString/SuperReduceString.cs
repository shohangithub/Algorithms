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
}