min_num = 65
max_num = 90

n = 50

letter = min_num
result = []
for i in reversed(range(n)):
    line = " " * i
    letters = []
    for j in range(n - i):
        letters.append(chr(letter))
        letter = ((letter + 1) - min_num) % (max_num - min_num + 1) + min_num
    print(line + " ".join(letters))
