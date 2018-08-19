import { NgModule } from '@angular/core';
import { IconChevronDown, IconLogOut, IconUser } from 'angular-feather';

const ICONS = [
  IconLogOut,
  IconUser,
  IconChevronDown,
];

@NgModule({
  exports: ICONS,
})
export class IconsModule { }
