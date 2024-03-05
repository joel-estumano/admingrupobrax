import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MenuService } from 'src/app/services/menu/menu.service';
import { AboutService } from '../../services/about.service';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { ScreenService } from 'src/app/services/screen/screen.service';
import { AboutInterface } from 'src/app/interfaces/about.interface';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { CKEditorFileService } from '../../services/ckeditor-file.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
    ckeditor = ClassicEditor;
    aboutRef: AboutInterface;
    form: FormGroup;

    constructor(
        private menu: MenuService,
        private aboutService: AboutService,
        private cKEditorFileService: CKEditorFileService,
        private screen: ScreenService,
        private translate: TranslateService,
        private navigation: NavigationService,
        private fb: FormBuilder
    ) {
        this.menu.items.forEach((e) => {
            e.selected = e.name == 'Sobre o Grupo Brax';
        });
        this.form = this.fb.group({
            text: new FormControl(null, [Validators.required]),
        });
        this.load();
    }

    load() {
        this.aboutService.getAll().subscribe({
            next: (resp: AboutInterface[]) => {
                if (!resp || !resp.length) {
                    this.aboutService.add('<p>Lorem Ipsum!</p>').subscribe((resp) => {
                        this.load();
                    });
                } else {
                    this.aboutRef = resp[0];
                    this.form.patchValue({ text: this.aboutRef.text });
                }
            },
            error: (err) => {
                this.screen.presentToast(this.translate.verifyErrors(err.code));
            },
            complete: () => { },
        });
    }

    onReady(editor: any) {
        editor.ui.view.editable.element.parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.view.editable.element
        );
        editor.plugins.get('FileRepository').createUploadAdapter = (
            loader: any
        ) => {
            return this.cKEditorFileService.loader(this.aboutRef.id, loader);
        };
    }

    onSubmit() {
        if (this.aboutRef && this.form.valid) {
            this.aboutService
                .update(this.aboutRef.id, this.form.value.text)
                .subscribe({
                    next: () => {
                        this.navigation.goTo('home');
                    },
                    error: (err) => {
                        this.screen.presentToast(this.translate.verifyErrors(err.code));
                    },
                    complete: () => { },
                });
        }
    }
}
