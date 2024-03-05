import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable()
export class CKEditorFileService {
    constructor(private storage: AngularFireStorage) { }

    loader(docId: string, loader: any) {
        return new FirebaseUploadAdapter(this.storage, docId, loader);
    }
}

class FirebaseUploadAdapter {

    private docId: string;
    private loader: any;
    private folder: string = 'img/about';

    constructor(private storage: AngularFireStorage, docId: string, loader: any) {
        this.docId = docId;
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then(
            (file: File) =>
                new Promise((resolve, reject) => {
                    this.storage
                        .ref(this.folder)
                        .child(this.docId)
                        .put(file)
                        .then(() => {
                            this.storage
                                .ref(`${this.folder}/${this.docId}`)
                                .getDownloadURL()
                                .subscribe({
                                    next: (path) => {
                                        resolve({ default: path });
                                    },
                                    error: (error) => {
                                        reject(error);
                                    },
                                });
                        })
                        .catch((error) => {
                            reject(error);
                        });
                })
        );
    }
}
