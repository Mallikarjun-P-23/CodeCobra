export const levels = [
  {
    id: 1,
    title: "Hello World",
    description: "Welcome to Python! Let's start with the traditional first program.",
    task: "Write a program that prints 'Hello, World!' to the console.",
    starterCode: "# Write your code here\n",
    expectedOutput: "Hello, World!",
    hint: "Use the print() function with the text in quotes: print('Hello, World!')",
    solution: "print('Hello, World!')"
  },
  {
    id: 2,
    title: "Variables and Numbers",
    description: "Learn to store and work with numbers using variables.",
    task: "Create a variable called 'age' with value 25, then print it.",
    starterCode: "# Create a variable and print it\n",
    expectedOutput: "25",
    hint: "Create a variable: age = 25, then print it: print(age)",
    solution: "age = 25\nprint(age)"
  },
  {
    id: 3,
    title: "String Variables",
    description: "Work with text data using string variables.",
    task: "Create a variable called 'name' with your name, then print 'Hello, [name]!'",
    starterCode: "# Create a string variable\n",
    expectedOutput: "Hello, Python!",
    hint: "Use string concatenation or f-strings: print(f'Hello, {name}!')",
    solution: "name = 'Python'\nprint(f'Hello, {name}!')"
  },
  // Add all other levels following the same pattern
  {
      id: 3,
      title: "String Variables",
      description: "Work with text data using string variables.",
      task: "Create a variable called 'name' with your name, then print 'Hello, [name]!'",
      starterCode: "# Create a string variable\n",
      expectedOutput: "Hello, Python!",
      hint: "Use string concatenation or f-strings: print(f'Hello, {name}!')",
      solution: "name = 'Python'\nprint(f'Hello, {name}!')"
    },
    {
      id: 4,
      title: "User Input",
      description: "Learn to get input from users and respond.",
      task: "Ask for the user's favorite color and print 'Your favorite color is [color]'",
      starterCode: "# Get user input and respond\n",
      expectedOutput: "Your favorite color is blue",
      hint: "Use input() to get user input: color = input('What is your favorite color? ')",
      solution: "color = input('What is your favorite color? ')\nprint(f'Your favorite color is {color}')"
    },
    {
      id: 5,
      title: "Basic Math",
      description: "Perform mathematical operations in Python.",
      task: "Calculate 15 + 27 and print the result.",
      starterCode: "# Calculate and print the sum\n",
      expectedOutput: "42",
      hint: "Use the + operator: print(15 + 27)",
      solution: "print(15 + 27)"
    },
    {
      id: 6,
      title: "Conditionals",
      description: "Make decisions in your code with if statements.",
      task: "Check if the number 10 is greater than 5. If true, print 'Yes, 10 is greater than 5'",
      starterCode: "# Use an if statement\nnumber = 10\n",
      expectedOutput: "Yes, 10 is greater than 5",
      hint: "Use if statement: if number > 5: print('Yes, 10 is greater than 5')",
      solution: "number = 10\nif number > 5:\n    print('Yes, 10 is greater than 5')"
    },
    {
      id: 7,
      title: "For Loops",
      description: "Repeat actions using for loops.",
      task: "Print numbers from 1 to 3 using a for loop.",
      starterCode: "# Use a for loop to print numbers\n",
      expectedOutput: "1\n2\n3",
      hint: "Use range(): for i in range(1, 4): print(i)",
      solution: "for i in range(1, 4):\n    print(i)"
    },
    {
      id: 8,
      title: "While Loops",
      description: "Use while loops for conditional repetition.",
      task: "Print numbers from 1 to 3 using a while loop.",
      starterCode: "# Use a while loop\ncount = 1\n",
      expectedOutput: "1\n2\n3",
      hint: "Increment count each iteration: while count <= 3: print(count); count += 1",
      solution: "count = 1\nwhile count <= 3:\n    print(count)\n    count += 1"
    },
    {
      id: 9,
      title: "Lists Basics",
      description: "Store multiple items in lists.",
      task: "Create a list with fruits ['apple', 'banana', 'orange'] and print the second item.",
      starterCode: "# Create a list and access items\n",
      expectedOutput: "banana",
      hint: "Lists use zero-based indexing: fruits[1] gets the second item",
      solution: "fruits = ['apple', 'banana', 'orange']\nprint(fruits[1])"
    },
    {
      id: 10,
      title: "List Operations",
      description: "Add and modify list items.",
      task: "Create a list [1, 2, 3], add the number 4, then print the entire list.",
      starterCode: "# Create list and add item\n",
      expectedOutput: "[1, 2, 3, 4]",
      hint: "Use append() method: numbers.append(4), then print(numbers)",
      solution: "numbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)"
    },
    {
      id: 11,
      title: "Functions Basics",
      description: "Create reusable code with functions.",
      task: "Define a function called 'greet' that prints 'Hello!' and then call it.",
      starterCode: "# Define and call a function\n",
      expectedOutput: "Hello!",
      hint: "Use def keyword: def greet(): print('Hello!'), then call greet()",
      solution: "def greet():\n    print('Hello!')\n\ngreet()"
    },
    {
      id: 12,
      title: "Functions with Parameters",
      description: "Pass data to functions using parameters.",
      task: "Create a function 'say_hello' that takes a name parameter and prints 'Hello, [name]!'. Call it with 'World'.",
      starterCode: "# Function with parameter\n",
      expectedOutput: "Hello, World!",
      hint: "def say_hello(name): print(f'Hello, {name}!'), then call say_hello('World')",
      solution: "def say_hello(name):\n    print(f'Hello, {name}!')\n\nsay_hello('World')"
    },
    {
      id: 13,
      title: "Dictionaries",
      description: "Store key-value pairs using dictionaries.",
      task: "Create a dictionary with person info: name='Alice', age=30. Print the name.",
      starterCode: "# Create and use a dictionary\n",
      expectedOutput: "Alice",
      hint: "Use curly braces: person = {'name': 'Alice', 'age': 30}, access with person['name']",
      solution: "person = {'name': 'Alice', 'age': 30}\nprint(person['name'])"
    },
    {
      id: 14,
      title: "String Methods",
      description: "Manipulate strings with built-in methods.",
      task: "Take the string 'python programming' and print it in uppercase.",
      starterCode: "# Use string methods\ntext = 'python programming'\n",
      expectedOutput: "PYTHON PROGRAMMING",
      hint: "Use the upper() method: text.upper()",
      solution: "text = 'python programming'\nprint(text.upper())"
    },
    {
      id: 15,
      title: "Final Challenge",
      description: "Combine everything you've learned!",
      task: "Create a list of numbers [1,2,3,4,5], use a for loop to print each number multiplied by 2.",
      starterCode: "# Final challenge - combine concepts\n",
      expectedOutput: "2\n4\n6\n8\n10",
      hint: "Loop through the list: for num in numbers: print(num * 2)",
      solution: "numbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n    print(num * 2)"
    }
];