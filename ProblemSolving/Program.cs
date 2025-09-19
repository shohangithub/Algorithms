// See https://aka.ms/new-console-template for more information
using ProblemSolving.CountTheNumberOfPairs;
using ProblemSolving.Strings.BigAlternativeString;

Console.WriteLine("Problem Solving:");
SuperReduceString.SuperReduce("aaabccddd");
Console.WriteLine(SuperReduceString.MinimumNumber(3, "Ab1"));

Console.WriteLine("\n****Count the number of pairs of integers:****\n\n");
Console.WriteLine(CountTheNumberOfPairs.CountPairsOptimized([1, 7, 5, 9, 2, 12, 3], 2));


Console.WriteLine("\n****Big Alternative String:****\n\n");
BigAlternativeString.BigAlternativePairString("abaacdabd");



Console.WriteLine("\n****Check Strong Password:****\n\n");
StrongPassword.SetStrongPassword(7, "AUzs-nV");


Console.WriteLine("\n****Encrypt Caesar Chiper String:****\n\n");
CaesarCipher.ProtectedString("abcdefghijklmnopqrstuvwxyz", 3);


Console.WriteLine("\n****Mars Exploration String:****\n\n");
MarsExploration.Exploration("SOSTOT");


Console.WriteLine("\n****Subsequence Char in String:****\n\n");
var result = SubSequenceCharString.ContainsSubsequence("haackccklerrannk");
//var result = SubSequenceCharString.ContainsSubsequence("haacckkerrannkk");
Console.WriteLine(result);

Console.WriteLine("\n****Weighted Uniform Strings:****\n\n");
WeightedUniformStrings.Execute("abcccddde", new List<int> { 6, 1, 3, 12, 5, 9, 10 });

Console.WriteLine("\n****Funny String:****\n\n");
FunnyString.Execute("acxz");
FunnyString.Execute("bcxz");

Console.WriteLine("\n****Gemstones:****\n\n");
Gemstones.Execute(["abcdde", "baccd", "eeabg"]);


Console.WriteLine("\n****Beautiful Binary String:****\n\n");
BeautifulBinaryString.Execute("0101010");


Console.WriteLine("\n****Love Letter Mystery String:****\n\n");
TheLoveLetterMystery.Execute("abaac");
// abbac -> abbab -> abbaa -> aabaa
