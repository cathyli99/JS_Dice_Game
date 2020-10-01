namespace Eudreka {
    class Program {
        static void Main(string args[]){
            #region Named Parameters
            int a; // an out parameter needs not to be initialized
            int b; // an out parameter needs not to be initialized
            Program p = new Program();
            int result = p.Add(out a, out b);  // out parameters
            #endregion// Abstract class
abstract class Animal
{
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep()
  {
    Console.WriteLine("Zzz");
  }
}

// Derived class (inherit from Animal)
class Pig : Animal
{
  public override void animalSound()
  {
    // The body of animalSound() is provided here
    Console.WriteLine("The pig says: wee wee");
  }
}

class Program
{
  static void Main(string[] args)
  {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();  // Call the abstract method
    myPig.sleep();  // Call the regular method
  }
}
        }
        private int Add(out int x, out int y){ // out parameters must be assigned in the calling method before any exit
            x = 5;
            y = 20;
            return x + y;
        }
    }
}