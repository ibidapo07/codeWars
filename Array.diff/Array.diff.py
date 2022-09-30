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