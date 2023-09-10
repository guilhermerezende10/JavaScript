/*
 * quicksort.hpp
 *
 *  Created on: 30 de ago. de 2023
 *      Author: arsrc
 */

#ifndef QUICKSORT_HPP_
#define QUICKSORT_HPP_

#include <vector>

//Chamado do main.
template<typename T>
void quicksort(std::vector<T> &v) {
	quicksort<T>(v, 0, v.size() - 1);
}

//Chamada interna e chamadas recursivas.
template<typename T>
void quicksort(std::vector<T> &X, int IniVet, int FimVet) {
	T pivo, aux;
	int i, j;
	
	if (IniVet < FimVet) {
		pivo = X.at((IniVet + FimVet) / 2);
		i = IniVet;
		j = FimVet;

		while (i <= j) {
			while(X.at(i) < pivo) {
				i++;
			}

			while(X.at(j) > pivo) {
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

#endif  //QUICKSORT_HPP_
