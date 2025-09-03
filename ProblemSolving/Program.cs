// See https://aka.ms/new-console-template for more information
using ProblemSolving.CountTheNumberOfPairs;
using ProblemSolving.Strings.BigAlternativeString;

Console.WriteLine("Problem Solving:");
SuperReduceString.SuperReduce("aaabccddd");
Console.WriteLine(SuperReduceString.MinimumNumber(3, "Ab1"));

Console.WriteLine("\n****Count the number of pairs of integers:****\n\n");
Console.WriteLine(CountTheNumberOfPairs.CountPairsOptimized([ 1, 7, 5, 9, 2, 12, 3],2));


Console.WriteLine("\n****Big Alternative String:****\n\n");
BigAlternativeString.BigAlternativePairString("abaacdabd");



Console.WriteLine("\n****Check Strong Password:****\n\n");
StrongPassword.SetStrongPassword(7,"AUzs-nV");