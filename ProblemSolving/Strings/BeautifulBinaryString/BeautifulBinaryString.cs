public static class BeautifulBinaryString
{
    public static int Execute(string str)
    {
        int count = 0;
        for (int i = 0; i < str.Length - 2; i++)
        {
            if (str.Substring(i, 3) == "010")
            {
                count++;
                i += 2; // Skip the next two characters to avoid overlapping
            }
        }
        return count;
    }
}