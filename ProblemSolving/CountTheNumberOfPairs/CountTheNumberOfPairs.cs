namespace ProblemSolving.CountTheNumberOfPairs;

public static class CountTheNumberOfPairs
{
    /*
        Given an array of distinct integer values, count the number of pairs of integers that 
        have difference k. For example, given the array { 1, 7, 5, 9, 2, 12, 3} and the difference 
        k = 2,there are four pairs withdifference2: (1, 3), (3, 5), (5, 7), (7, 9)
     */
    public static int CountPairs(int[] nums, int k)
    {
        var pairs = new HashSet<(int, int)>();
        var complexityCount = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = 0; j < nums.Length; j++)
            {
                if (i + k == j)
                {
                    pairs.Add((i, j));
                }

                Console.WriteLine(++complexityCount);
            }
        }
        return  pairs.Count();
    }


    public static int CountPairsWithSort(int[] nums, int k)
    {
        nums = nums.OrderBy(x => x).ToArray();

        var pairs = new HashSet<(int, int)>();
        var complexityCount = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = 0; j < nums.Length; j++)
            {
                if (nums[i] + k < nums[j]) break;

                if (nums[i] + k == nums[j])
                {
                    pairs.Add((nums[i], nums[j]));
                    Console.WriteLine((nums[i], nums[j]));
                }

                Console.WriteLine(++complexityCount);
            }
        }
        return pairs.Count();
    }


    public static int CountPairsOptimized(int[] nums, int k)
    {
        Console.WriteLine("All the pairs:");
        var numberSet = new HashSet<int>(nums);
        var pairCount = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            var isMatchValue = numberSet.TryGetValue(nums[i] + k, out int matchValue);
            if (isMatchValue)
            {
                pairCount++;
                Console.WriteLine((nums[i], matchValue));
            }
        }

        Console.WriteLine("Pairs Count:");
        return pairCount;
    }
}
