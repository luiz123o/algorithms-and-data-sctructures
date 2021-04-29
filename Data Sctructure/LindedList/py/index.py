class Node:
    """
    An Object for storing a single node of a linked list:
    Models two atributes - data and the link to next node in the list 
    """

    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    def __repr__(self):
        return "<Node data: %s" % self.data

    class LinkedList:
        def __init__(self):
            self.head = None