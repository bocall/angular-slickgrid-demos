import { AppRoutingRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { CustomTitleFormatterComponent } from './examples/custom-titleFormatter.component';
import { EditorNgSelectComponent } from './examples/editor-ng-select.component';
import { FilterNgSelectComponent } from './examples/filter-ng-select.component';
import { GridAddItemComponent } from './examples/grid-additem.component';
import { GridAngularComponent } from './examples/grid-angular.component';
import { GridAutoHeightComponent } from './examples/grid-autoheight.component';
import { GridBasicComponent } from './examples/grid-basic.component';
import { GridClientSideComponent } from './examples/grid-clientside.component';
import { GridColspanComponent } from './examples/grid-colspan.component';
import { GridDraggableGroupingComponent } from './examples/grid-draggrouping.component';
import { GridEditorComponent } from './examples/grid-editor.component';
import { GridFormatterComponent } from './examples/grid-formatter.component';
import { GridFrozenComponent } from './examples/grid-frozen.component';
import { GridGraphqlComponent } from './examples/grid-graphql.component';
import { GridGroupingComponent } from './examples/grid-grouping.component';
import { GridHeaderMenuComponent } from './examples/grid-headermenu.component';
import { GridHeaderButtonComponent } from './examples/grid-headerbutton.component';
import { GridLocalizationComponent } from './examples/grid-localization.component';
import { GridMenuComponent } from './examples/grid-menu.component';
import { GridOdataComponent } from './examples/grid-odata.component';
import { GridRemoteComponent } from './examples/grid-remote.component';
import { GridRowDetailComponent } from './examples/grid-rowdetail.component';
import { GridRowMoveComponent } from './examples/grid-rowmove.component';
import { GridRowSelectionComponent } from './examples/grid-rowselection.component';
import { GridStateComponent } from './examples/grid-state.component';
import { GridTabsComponent } from './examples/grid-tabs.component';
import { HomeComponent } from './examples/home.component';
import { RowDetailPreloadComponent } from './examples/rowdetail-preload.component';
import { RowDetailViewComponent } from './examples/rowdetail-view.component';

import { SwtCommonGridTestComponent } from './examples/swt-common-grid-test.component';
import { SwtCommonGridPaginationComponent } from './examples/swt-common-grid-pagination.component';
import { SwtCommonGridComponent } from './examples/swt-common-grid.component';

import { AppComponent } from './app.component';
import { AngularSlickgridModule } from 'angular-slickgrid';
import { localeFrench } from './locales/fr';

// @dynamic
@NgModule({
  declarations: [
    AppComponent,
    CustomTitleFormatterComponent,
    EditorNgSelectComponent,
    FilterNgSelectComponent,
    GridAddItemComponent,
    GridAngularComponent,
    GridAutoHeightComponent,
    GridBasicComponent,
    GridClientSideComponent,
    GridColspanComponent,
    GridEditorComponent,
    GridDraggableGroupingComponent,
    GridFormatterComponent,
    GridFrozenComponent,
    GridGraphqlComponent,
    GridGroupingComponent,
    GridHeaderButtonComponent,
    GridHeaderMenuComponent,
    GridLocalizationComponent,
    GridMenuComponent,
    GridOdataComponent,
    GridRemoteComponent,
    GridRowDetailComponent,
    GridRowMoveComponent,
    GridRowSelectionComponent,
    GridStateComponent,
    GridTabsComponent,
    RowDetailPreloadComponent,
    RowDetailViewComponent,
    SwtCommonGridTestComponent,
    SwtCommonGridPaginationComponent,
    SwtCommonGridComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    TabsModule.forRoot(),
    AngularSlickgridModule.forRoot({
      // add any Global Grid Options/Config you might want
      // to avoid passing the same options over and over in each grids of your App
      enableAutoResize: true,
      autoResize: {
        containerId: 'demo-container',
        sidePadding: 15
      },
      // Provide a custom locales set
      // locales: localeFrench, 
    })
  ],
  entryComponents: [
    // dynamically created components
    CustomTitleFormatterComponent,
    EditorNgSelectComponent,
    FilterNgSelectComponent,
    RowDetailPreloadComponent,
    RowDetailViewComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
