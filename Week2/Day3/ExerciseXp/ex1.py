class Currency:
        def __init__(self, currency, amount):
                self.currency = currency
                self.amount = amount
        def __str__(self):
                return f" {self.amount} {self.currency}"
        def __repr__(self):
                return f"  {self.currency} {self.amount}"
        def __int__(self):
                return int(self.amount)
    #how to present obj 
        def __format__(self, format_spec):
                if format_spec == 'repr':  
                        return self.__repr__()
                elif format_spec == 'str':  
                        return self.__str__()
                elif format_spec == "spetial":
                        return f" {self.amount} {self.currency}"
                else:
                        return f" {self.amount} {self.currency}"
        # def __iadd__(self,other):
        #         if isinstance(other, (int, float)):
        #                 self.amount+=other
        #         return self.amount

        def __iadd__(self,other):
                
                        if isinstance(other, Currency):
                                if self.currency == other.currency:
                                        self.amount = self.amount + self.amount + other.amount
                                        return self
                        
                        
                       
                        
                
        
        def __add__(self,other):
                if isinstance(other,Currency):
                        if self.currency==other.currency:
                                # return Currency(self.amount+other.amount,self.currency)
                                return self.amount+other.amount
                        else:
                                raise ValueError("no adding different currencies")
                

        

    
    
c1 = Currency('dollar', 5)
# print(c1)
# int_valur=int(c1)
# print(int_valur)
# print(f'{c1:repr}')
# c1+=5
# print(c1)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
# test_result=c1+c2
# print(test_result)
# print(c1)
# c1+=5
# print(c1)

c1 += c2
print(c1)

# test=c1 + c3
# print(test)




