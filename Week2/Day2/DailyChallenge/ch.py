import math

class Pagination():
        def __init__(self,items, pageSize=10):
                 self.items = items if items is not None else []
                 self.pageSize = pageSize
                 self.current_page = 1
        
        def get_page(self, n):
                if n < 1 or n > self.total_pages():
                        print("page number not found")
                        return []
                start = (n - 1) * self.pageSize
                end = start + self.pageSize
                return self.items[start:end]
        
        def total_pages(self):
                return math.ceil(len(self.items) / self.pageSize)
        
        def next_page(self):
                if self.current_page < self.total_pages():
                        self.current_page += 1
                return self.get_page(self.current_page)
        
        def prev_page(self):
                if self.current_page > 1:
                 self.current_page -= 1
                return self.get_page(self.current_page)
        
#Didn't have time to do other tasks

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 2)
print(p.get_page(1))




        
        