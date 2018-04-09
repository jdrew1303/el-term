import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutState, LayoutStateModel } from '../../state/layout';
import { TabsState, TabsStateModel } from '../../state/tabs';

import { Observable } from 'rxjs/Observable';
import { Select } from '@ngxs/store';

/**
 * Root controller
 */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'elterm-root-ctrl',
  styles: [':host { display: none; }'],
  template: ''
})

export class RootCtrlComponent {

  @Select(LayoutState) layout$: Observable<LayoutStateModel>;
  @Select(TabsState) tabs$: Observable<TabsStateModel>;

}
