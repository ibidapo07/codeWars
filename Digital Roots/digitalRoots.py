def digital_root(n):
    n = eval('+'.join(list(str(n))))
    return n if len(str(n)) == 1 else digital_root(n)