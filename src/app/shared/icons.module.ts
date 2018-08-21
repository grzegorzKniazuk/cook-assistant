import { NgModule } from '@angular/core';
import { IconChevronDown, IconList, IconLogOut, IconPlusCircle, IconUser } from 'angular-feather';

const ICONS = [
  IconLogOut,
  IconUser,
  IconChevronDown,
  IconList,
  IconPlusCircle,
];

@NgModule({
  exports: ICONS,
})
export class IconsModule { }
