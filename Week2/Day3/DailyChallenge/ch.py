import math
import turtle
class Circle:
        def __init__(self,radius=None,diameter=None):
                 if radius is not None:
                        self._radius = radius
                 elif diameter is not None:
                        self._radius = diameter / 2
        def draw(self):
                screen = turtle.Screen()
                screen.setup(500, 500)
                screen.bgcolor("white")

                pen = turtle.Turtle()
                pen.speed(3)
                pen.penup()
                pen.goto(0, -self.radius)  # Ставим центр круга
                pen.pendown()
                pen.circle(self.radius)

                screen.mainloop()

                        
        
        @property
        def radius(self):
                return self._radius
        
        @radius.setter
        def radius(self,value):
                self.radius=value

        @property
        def diameter(self):
                return self._radius * 2
        
        @diameter.setter
        def diameter(self, value):
                self._radius = value / 2

        def area(self):
                return math.pi * self._radius ** 2
        
        def __repr__(self):
                return f"Circle(radius={self._radius})"
        
        def __add__(self, other):
                radius=self.radius + other.radius
                return radius
        
        def __lt__(self, other):
                return self.radius < other.radius
        
        def __eq__(self, other):
                return self.radius == other.radius
        
# c1 = Circle(radius=8)
# c2 = Circle(radius=6)
# c3 = c1 + c2
# print(c3)

# c1 = Circle(radius=7)
# c2 = Circle(diameter=11)  
# c3 = Circle(radius=4)

# print(c1) 
# print(c1.radius)  
# print(c1.diameter)  
# print(c1.area()) 
# c4 = c1 + c3  
# print(c4)  
# print(c3 < c1) 
# print(c1 == c2)  
        
c1 = Circle(radius=50) 
c1.draw()
