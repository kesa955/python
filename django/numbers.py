x='428'
while(True):
    print("Enter the number")
    y=input()
    for i in y:
        if i in x and x.index(i)==y.index(i):
            print("Match")
        elif i in x and x.index(i)!=y.index(i):
            print("Close")
        else:
            print("Nope")
    if y==x:
        print("You guessed it right!! Congo!!!")
        break
