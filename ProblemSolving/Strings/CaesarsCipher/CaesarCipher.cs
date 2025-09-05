using System.Text;

public static class CaesarCipher
{
    /*
    Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. 
    If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
    In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

    Original alphabet:      abcdefghijklmnopqrstuvwxyz
    Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
    */

    public static void ProtectedString(string s, int k)
    {
        var newString = new StringBuilder();

        for (var i = 0; i < s.Length; i++)
        {
            char ch = s[i];

            if (ch >= 65 && ch <= 90)  // ASCII -  (A-Z) <=> (65-90)
            {
                char new_character = (char)((ch + k - 65) % 26 + 65); // => (90+10-65) % 26 + 65  => 35 % 26 + 65 => 11 + 65 => 76
                newString.Append(new_character);
            }
            else if (ch >= 97 && ch <= 122) // ASCII -  (a-z) <=> (97-122)
            {
                char new_character = (char)((ch + k - 97) % 26 + 97); // => (120+10-97) % 26 + 97  => 33 % 26 + 97 => 7 + 97 => 104
                newString.Append(new_character);
            }
            else
                newString.Append(ch);
        }

        Console.WriteLine("Input String: " + s.ToString());
        Console.WriteLine("Encrypted String: " + newString.ToString());
    }

}