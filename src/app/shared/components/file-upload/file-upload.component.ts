import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploadComponent {

  public readonly imageControlURL = '../../../../assets/images/photo-256.png';

  constructor() { }

}
