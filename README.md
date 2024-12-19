Overview:
A Prefix/Postfix Calculator evaluates mathematical expressions written in prefix (Polish notation)
or postfix (Reverse Polish notation) format. 
These formats are compact and eliminate the need for parentheses to define operation precedence.

1.Prefix Notation:
-Syntax: Operators precede their operands.
Example: + 3 5 (equivalent to 3 + 5).
-Evaluation: Start from the rightmost operator and move left,
applying each operator to the appropriate operands.

2.Postfix Notation:
-Syntax: Operands precede their operator.
Example: 3 5 + (equivalent to 3 + 5).
-Evaluation: Operate left-to-right,
using a stack to store operands until an operator is encountered.

1.Input Handling:
Accept expressions in prefix or postfix notation as strings

2.Data Structure:
Use a stack for evaluation.

3.Evaluation Algorithm:
-For Postfix:
Iterate through tokens.
Push operands to the stack.
When an operator is encountered, pop the required number of operands from the stack, apply the operation, and push the result back.

4.For Prefix:
Reverse the expression.
Follow the same logic as postfix but process from right to left.

5.Error Handling:
Handle invalid expressions (e.g., incorrect number of operands, unsupported operators).

How to use:
simply follow the examples given before
if prefix start with an opperator followed by operand, and if it is postfix start with operand and end with operator
PS: Don't forget to add spaces between each number and between numbers and operators
