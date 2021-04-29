# Definir um bloco de função ou um bloco de código
# Definimos 2 argumentos
# 1° A lista que vamos pesquisar
# 2° O valor que queremos pesquisar na lista
def linear_search(list, target):
    """
    Returns the index position of target if found, else returns None
    """
    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return None

def verify(index):
    if index is not None:
        print("Target found at index: ", index )
    else:
        print("Target not found in list")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

result = linear_search(numbers, 4)
verify(result)


