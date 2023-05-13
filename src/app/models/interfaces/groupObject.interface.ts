import { Validators } from '@angular/forms';

export interface groupObject {
  [key: string]: ['', Validators] | [null];
}
