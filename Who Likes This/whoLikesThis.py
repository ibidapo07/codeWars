def likes(names):
    likes = names
    if(len(likes) == 0):
        return "no one likes this"
    elif(len(likes) > 0):
        if(len(likes) == 1):
            return likes[0]+" likes this"
        if(len(likes) == 2):
            return likes[0]+" and "+likes[1]+" like this"
        if(len(likes) == 3):
            return likes[0]+", "+likes[1]+" and "+likes[2]+" like this"
        if(len(likes) > 3):
            return likes[0]+", "+likes[1]+" and "+str(len(likes)-2)+" others like this"
    pass