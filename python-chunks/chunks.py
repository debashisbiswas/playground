from itertools import zip_longest

def main():
    foo = ["a", "b", "c", "d", "e", "f"]

    # Trying to get ("a", "b"), ("c", "d"), ("e", "f")
    bar = [iter(foo)] * 2
    for first, second in zip_longest(*bar):
        print(first, second)


if __name__ == "__main__":
    main()
