def move_zeros(array):
    m = []
    for i in array :
        if i == 0 : m.append(0)
    array = [int(i) for i in list(''.join([str(i) for i in array if i != 0]))]
    
    return array + m