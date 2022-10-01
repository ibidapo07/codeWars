def array_diff(a, b):
    c = a 
    d = []
    
    if a == [] or b == [] :
        return a
    else:
        for i in c:
            if i in a and i in b:
                continue
            else:
                d.append(i)
    return d


array = [1,3,2,4,1,6,7,2,3,8,9]
array.sort()
print(array)