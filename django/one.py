import re
class dog():
    species="mammal"
    def __init__(self,breed):
        self.breed=breed

s = "hello this is django python course this helps"
print(re.search('this',s).start())
print(re.search('this',s).end())
print(re.split(" ",s))
print(re.findall('this',s))
