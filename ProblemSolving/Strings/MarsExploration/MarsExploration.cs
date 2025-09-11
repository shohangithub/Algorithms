/*
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

NASA_Mars_Rover.jpg

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.
*/
public static class MarsExploration
{
    public static int Exploration(string s)
    {
        int count = 0;
        for (int i = 0; i < s.Length; i++)
        {
          
            

/*
✅ Examples:
var x = "SOS"[i % 3];

If i = 0 → "SOS"[0 % 3] = "SOS"[0] = 'S'
If i = 1 → "SOS"[1 % 3] = "SOS"[1] = 'O'
If i = 2 → "SOS"[2 % 3] = "SOS"[2] = 'S'
If i = 3 → "SOS"[3 % 3] = "SOS"[0] = 'S'
If i = 4 → "SOS"[4 % 3] = "SOS"[1] = 'O'

*/

            if (s[i] != "SOS"[i % 3])
            {
                count++;
            }
        }
        
        Console.WriteLine("Eploration Count:");
        Console.WriteLine(count);
        return count;
    }
}