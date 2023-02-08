#include <stdio.h>

int main (int argc, char *argv[])
{
	int num = 0x41424344;
	char* pointer = &num;
	for (int i = 0; i < 4; i++) {
		char current = *pointer;
		printf("%c\n", current);
		pointer += 1;
	}
	return 0;
}
