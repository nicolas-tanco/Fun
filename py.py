def computepay(h,r):
    if h>40:
        pay=(h-40)*r*1.5+40*r
    else:
        pay=h*r
    return pay

hrs= input("enter hours:")
h= float(hrs)
rate=input ("enter rate:")
r=float(rate)

p=computepay(h,r)
print("pay", p)