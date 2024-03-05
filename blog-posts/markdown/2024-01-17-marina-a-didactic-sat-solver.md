# Marina: a didactic SAT solver

When I first (seriously) started getting into complexity theory, and I began having (serious) discussions about the subject with (serious) members of the field, I got into a . This person glanced around, made sure no-one was close enough to here, then lent in and whispered.

"You know, NP is the new P."

I daren't name the individual, for fear of brutal repercussions upon them, but they made a good point. NP is probably the most well-studied and well-understood complexity classes (barring one small open problem). We . But in a more practical sense, NP _is_ the new P due to the resounding success of modern SAT solvers. 

A large number of problems become trivial if we can translate them to a SAT instance, then stick them into a SAT solver. Whilst many of us may be aware that 

However, despite our relatively deep understanding of NP problems, we are constantly 

- Package managers
- Many generalized games, from sudoku, to ches

But despite their power, and the beauty of the ideas behind them, I claim that 

In this article, I will walk through the development of a SAT solver which implements some of the key innovations from the last twenty years. The end product will be a relatively simple, but performant SAT solver 

## Preliminaries

I'm going to assume a basic familiarity with  A propositional formula is a Boolean combination of propositional variables
$$
x_1 \lor x_2 \land \lnot x_3
$$
Propositional variables stand in for
$$
\text{GregLateForDinner} \lor \text{OvenBroken}
$$

## A first attempt

