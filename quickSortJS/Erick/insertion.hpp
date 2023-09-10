/*
 * insertion.hpp
 *
 *  Created on: 30 de ago. de 2023
 *      Author: arsrc
 */

#ifndef INSERTION_HPP_
#define INSERTION_HPP_

#include <vector>

template<typename T>
void insertionSort(std::vector<T> &v) {
	for (int i = v.size() - 2; i >= 0; i--) {
		v.at(v.size() - 1) = v.at(i);

		int j = i + 1;

		while (v.at(v.size() - 1).views > v.at(j).views) {
			v.at(j - 1) = v.at(j);
			j++;
		}
		v.at(j - 1) = v.at(v.size() - 1);
	}
}

#endif  //INSERTION_HPP_
