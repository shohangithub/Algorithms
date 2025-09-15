public class Pangram
{
    public static bool IsPangram(string s)
    {
        if (string.IsNullOrEmpty(s))
        {
            return false;
        }

        string ignore_case = s.ToLower();
        for (int i = 'a'; i <= 'z'; i++)
        {
            if (!ignore_case.Contains((char)i))
                return false;
        }
        return true;
    }


    public static void execute(string s)
    {
            Console.WriteLine(IsPangram(s) ? "pangram" : "not pangram");
    }
}