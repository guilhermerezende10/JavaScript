#include <vector>
#include <iostream>

//Chamada interna e chamadas recursivas.
template<typename T>
void quicksort(std::vector<T> &X, int IniVet, int FimVet) {
	T aux;
	int i, j, pivo;
	
	if (IniVet < FimVet) {
		pivo = (IniVet + FimVet) / 2;
		i = IniVet;
		j = FimVet;

        std::cout << IniVet << ", " << FimVet << ", " << pivo << std::endl;

		while (i <= j) {
			while(X.at(i) < X.at(pivo)) {
				i++;
			}

			while(X.at(j) > X.at(pivo)) {
				j--;
			}

			if(i <= j){
				aux = X.at(i);
				X.at(i) = X.at(j);
				X.at(j) = aux;

				i++;
				j--;
			}
		}

		quicksort(X, IniVet, j);
		quicksort(X, i, FimVet);
	}
}

//Chamado do main.
template<typename T>
void quicksort(std::vector<T> &v) {
	quicksort<T>(v, 0, v.size() - 1);
}


int main() {
    std::vector<int> vec = {34, 5, 3, 43, 67, 15, 9, 6, 76, 7, 10, 765, 4, 5454, 76 , 56, 5434, 34,356456,7 ,678, 78, 9,754,6 ,34,5 ,67,5, 8, 8, 4,65, 89, 14, 45, 1};

    quicksort<int>(vec);

    std::cout << "\n";
    for (auto i : vec) {
        std::cout << i << ", ";
    }
    std::cout << std::endl;

    return 0;
}