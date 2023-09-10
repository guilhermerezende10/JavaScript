#ifndef VIDEO
#define VIDEO
#include <string>
#include <iostream>
#include <fstream>
#include <vector>
#include <cstdlib>

using namespace std;

class Video {
public:
	string video_id;
	string title;
	int views;

	Video() :
		video_id(""), title(""), views(0) {
	}

	Video(string linha, char quebra = ','){
		stringstream ss(linha);
		string dado;

		getline(ss, dado, quebra); // video_id
		this->video_id = dado;

		getline(ss, dado, quebra); // trending_date

		getline(ss, dado, quebra); // title
		this->title = dado;

		for (int i = 0; i < 4; i++){ // channel_title, category_id, publish_time, tags
			getline(ss, dado, quebra);
		}

		getline(ss, dado, quebra);
		this->views = atoi(dado.c_str());

	}

	string toString() {
		stringstream ss;
		ss << this->video_id << ", " << this->title << ", " << this->views;

		return ss.str();
	}

	bool operator>(const Video &outroVideo) {
		return this->views > outroVideo.views;
	}
	bool operator<(const Video &outroVideo) {
		return this->views < outroVideo.views;
	}
	bool operator==(const Video &outroVideo) {
		return this->views == outroVideo.views;
	}
};



#endif /* VIDEO */
