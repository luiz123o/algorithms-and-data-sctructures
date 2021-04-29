# A pesquisa binaria pode retornar erro caso os elementos não estejam classificados

def binary_search(list, target):
    """
    Busco a quantidade de posições que tem minha lista mas como o array começa em 0
    Retiro -1 das posições para pegar o ultimo valor
    """
    first =  0
    last = len(list) - 1

    while first <= last:
        """
        Utilizarei // para o python arredondar para baixo
        """
        midpoint = (first + last) // 2
        
        if list[midpoint] == target:
            return midpoint
        elif list[midpoint] < target:
            first = midpoint + 1
        else:
            last = midpoint - 1
    return None
        
def verify(index):
    if index is not None:
        print("Target found at index: ", index )
    else:
        print("Target not found in list")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

result = binary_search(numbers, 4)
verify(result)