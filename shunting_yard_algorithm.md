##### in my calculator app i will use shunting yard algorithm to calculate any kind of expressions
##### rules
1. If the incoming symbols is an operand, print it..
2. If the incoming symbol is a left parenthesis, push it on the stack.
3. If the incoming symbol is a right parenthesis: discard the right parenthesis, pop and print the stack symbols until you see a left parenthesis. Pop the left parenthesis and discard it.
4. If the incoming symbol is an operator and the stack is empty or contains a left parenthesis on top, push the incoming operator onto the stack.
5. If the incoming symbol is an operator and has either higher precedence than the operator on the top of the stack, or has the same precedence as the operator 
on the top of the stack and is right associative, or if the stack is empty, or if the top of the stack is "(" (a floor) -- push it on the stack.
6. If the incoming symbol is an operator and has either lower precedence than the operator on the top of the stack, or has the same precedence as the operator on the top of the stack and is left associative - continue to pop the stack until this is not true. Then, push the incoming operator.
7. At the end of the expression, pop and print all operators on the stack. (No parentheses should remain.)

   [ for more information ](https://en.wikipedia.org/wiki/Shunting_yard_algorithm)
   