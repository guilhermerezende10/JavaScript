//============================================================================
// Name        : LP1-26-Métodos de ordenação
// Author      : Alisson RS
// Description : Atividade de avaliação de métodos de ordenação.
//============================================================================
#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <ctime>
#include <vector>
#include <string>

#include "insertion.hpp"
#include "bolha.hpp"
#include "quicksort.hpp"
#include "gerenciadorDeArquivos.hpp"
#include "aluno.hpp"
#include "video.hpp"

using namespace std;

void imprimeAlunos(vector<Aluno> alunos, int max = 0) {
	max = (max == 0 ? alunos.size() : max);
	for (int i = 0; i < max; ++i) {
		cout << alunos[i].toString() << endl;
	}
}

void imprimeVideos(vector<Video> videos, int max = 0) {
	max = (max == 0 ? videos.size() : max);
	for (int i = 0; i < max; ++i) {
		cout << videos[i].toString() << endl;
	}
}


int main(int argc, char **argv) {

	vector<string> linhas = GerenciadoDeArquivo::carregaAquivo(
			"dados//USvideos-10.csv");

	vector<Video> videos;
	for (int i = 0; i < linhas.size(); ++i) {
		Video novo(linhas[i]);
		videos.push_back(novo);
	}

	cout << "---------Dados desordenados.---------" << endl;
	imprimeVideos(videos, 5);



	// Marca o tempo de início
	clock_t inicio = clock();
	// Chama a função que você deseja medir

	//bolha<Video>(videos);
	quicksort<Video>(videos);
	//insertionSort<Video>(videos);
	

	// Marca o tempo de término
	clock_t fim = clock();

	// Calcula o tempo de execução em segundos
	double duracao = static_cast<double>(fim - inicio) / CLOCKS_PER_SEC;

	// Exibe o tempo de execução
	std::cout << "Tempo de execucao: " << duracao << " segundos" << std::endl;

	cout << "---------Dados ordenados.---------" << endl;
	imprimeVideos(videos, 5);

	return 0;
}
