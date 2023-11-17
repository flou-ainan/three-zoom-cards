# Devlopment of a three cards carousel that zoom the card in focus
CURRENTLY IN DEVELOPMENT



#### Tips for final impĺementation
The primary objective of this project is to build it for using on a [Next JS project](https://github.com/flou-ainan/servicos-do-mestre). But its being developed in vanilla JS for simplification.

So here im putting some tips for further helping in the final implementation.

Its using VW values that are absolute. In the future i will use styleJSX, having control of css values controled by the component itself.

I Think I will need to have two event listeners, on window resize and on screen orientation change. This changes need to trigger my state to change and rerender the component.