import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchHistoryService } from "./search-history.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SearchHistoryService
  ],
})
export class SearchHistoryModule {}
